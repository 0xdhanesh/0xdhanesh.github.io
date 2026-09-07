import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const browser = await chromium.launch({channel:'msedge',headless:true});
await mkdir('.preview',{recursive:true});
try {
  for(const width of [320,390,768,1024,1440]) {
    const context = await browser.newContext({viewport:{width,height:1000}, reducedMotion:'reduce'});
    const page = await context.newPage();
    const errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto('http://127.0.0.1:4173');
    assert.equal(await page.locator('h1').count(),1);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`Overflow at ${width}`);
    const broken = await page.locator('a[href^="#"]').evaluateAll(anchors=>anchors.filter(a=>a.hash && !document.getElementById(a.hash.slice(1))).map(a=>a.hash));
    assert.deepEqual(broken,[]);
    await page.getByRole('link',{name:'Experience',exact:true}).click();
    assert.equal(new URL(page.url()).hash,'#experience');
    const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert.deepEqual(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],`Accessibility at ${width}`);
    await page.goto('http://127.0.0.1:4173');
    await page.screenshot({path:`.preview/portfolio-${width}.png`,fullPage:true});
    if(width===1440) await page.pdf({path:'.preview/portfolio.pdf',format:'A4',printBackground:true});
    assert.deepEqual(errors,[]);
    await context.close();
    console.log(`PASS ${width}px: layout, anchors, accessibility, console`);
  }
  const page=await browser.newPage({javaScriptEnabled:false});
  await page.goto('http://127.0.0.1:4173');
  assert.equal(await page.locator('#experience .record').count(),3);
  assert.equal(await page.locator('.print-button').isVisible(),false);
  await page.goto('http://127.0.0.1:4173/work.html');
  await page.waitForURL('**/#experience');
  console.log('PASS JavaScript disabled and legacy URL redirect');
} finally {await browser.close();}
