---
name: Dhanesh Sivasamy
handle: 0xdhanesh
role: Senior Product Security Engineer
location: Dubai, UAE
origin: From India. Based in Dubai.
email: dhanesh.professional@gmail.com
github: https://github.com/0xdhanesh
blog: https://0xdhanesh.gitbook.io/
url: https://0xdhanesh.github.io
headline: An attacker's mindset.
headline_accent: An engineer's follow-through.
summary: I find the weaknesses that scanners miss — across applications, firmware, industrial systems, and AI — and work with engineers to turn findings into lasting fixes.
---

<!-- This is the source of truth for your portfolio. See README.md for examples.
Use ## for sections, ### for cards/roles, and --- between records.
Update the Festo dates and add your Dubai employer when ready; the original
portfolio listed Festo from March 2025 to Present. No new employer is assumed. -->

## Impact

### 12+
Critical & high-severity findings taken through remediation at Festo.

---

### 70%+
Of repetitive security assessments automated at Aujas.

---

### 4 → 10
Product Security team growth supported through hiring and mentoring.

## Selected work

### Second-order prompt injection in SOC workflows

*AI security · Research / proof of concept*

Attacker-controlled logs can become instructions when an LLM processes them later. I explored this indirect trust boundary through **IPI-SOC-LLM**, with an attack chain, mitigations, and detection notes.

[Explore the research ↗](https://github.com/0xdhanesh/IPI-SOC-LLM)

---

### From black-box traffic to an API specification

*Application security · Open-source tooling*

Built **burpsuite-swagger-generator**, a Burp Suite plugin that turns observed API traffic into Swagger / OpenAPI specifications to support testing and fuzzing when documentation is unavailable.

[View the source ↗](https://github.com/0xdhanesh/burpsuite-swagger-generator)

---

### Coordinated vulnerability disclosure

*Vulnerability research · CVE-2022-2912*

Authored **CVE-2022-2912** following responsible disclosure. Recognised in Oracle's Security Acknowledgement / Hall of Fame for coordinated disclosure.

[Read the CVE record ↗](https://www.cve.org/CVERecord?id=CVE-2022-2912)

## Experience

Most client work is confidential. These records describe the scope, approach, and outcomes I can share publicly.

### Festo

*Senior Product Security Engineer · Mar 2025 onward · Bengaluru, India*

- Drove remediation of **12+ critical and high-severity vulnerabilities** across web applications, firmware, hardware, IoT devices, and industrial edge controllers, including second-order injections, RCE, and safety parameter bypass.
- Worked with development teams and executive leadership to close findings and align on long-term risk reduction.
- Conducted protocol-level fuzzing on **Profinet and Modbus** to uncover previously unknown weaknesses.
- Facilitated threat analysis and risk assessment (TARA) across product lifecycles, aligned to Cyber Resilience Act requirements.
- Helped grow the Product Security team **from 4 to 10 engineers**, conducted technical interviews, and mentored 6 engineers from non-security backgrounds.
- Designed and delivered training in fuzzing, reverse engineering, and offensive security.

---

### Aujas Cybersecurity / NuSummit

*Trainee → Senior Security Consultant · Jun 2022 – Mar 2025 · Embedded at Sony India Software Center*

- Led offensive assessments across web, Android, iOS, tvOS, webOS, and TizenOS for media and OTT clients, identifying payment bypasses, DRM misconfigurations, business-logic flaws, and memory corruption.
- Built custom fuzzing tools, reversed proprietary protocols, and developed exploits and root-cause analyses, including a critical issue on a shipping consumer device.
- Developed attack-centric threat models and performed IoT / hardware testing and firmware reverse engineering.
- **Automated 70%+ of repetitive assessments** with Python and Bash; enhanced static analysis with Fortify and Semgrep.
- Delivered executive-level vulnerability reports with actionable remediation guidance.
- Promoted to Senior Consultant. Recognition included Best Team, Emerging Champion, Bravo, SPOT, and Valuable Partner of the Quarter awards.

---

### Strongbox IT

*Security Analyst Intern · Jul 2021 – Nov 2021 · Chennai, India*

- Assessed web and mobile applications for BFSI and healthcare clients.
- Conducted performance testing with JMeter and contributed to Flask-based development of the Modshield SB Web Application Firewall.

## Expertise

### Applications & AI

Web, API, mobile, and cross-platform penetration testing. Business-logic attack chains, prompt injection, and LLM trust boundaries.

**Tools:** Burp Suite, Frida, MobSF, Fortify, Semgrep.

---

### Devices & industrial systems

Firmware reverse engineering, hardware and IoT assessments, protocol fuzzing, and exploit development.

**Tools:** AFL++, Radamsa, Scapy, Ghidra, gdb, binwalk, Wireshark, nmap.

---

### Engineering & risk

Threat modelling, TARA, remediation, and security automation. Python, Bash, Docker, Git; reading and reversing C and x86 / ARM assembly.

**Frameworks:** OWASP, MITRE ATT&CK, IEC 62443, CRA, HIPAA, PCI-DSS, ISO 27001, Radio Equipment Directives.

## Credentials

### Certifications

- **OSCP** — Offensive Security Certified Professional
- **CRT** — CREST Registered Penetration Tester
- **CPSA** — CREST Practitioner Security Analyst
- **CAP** — Certified AppSec Practitioner
- **CNSP** — Certified Network Security Practitioner

---

### Education

**B.E. Computer Science and Engineering**  
Anna University Regional Campus Coimbatore · Jun 2019 – Nov 2022  
CGPA: 8.57 / 10

**Diploma in Electrical and Electronic Engineering**  
PSG College of Technology · Jun 2016 – Jun 2019  
CGPA: 7.8 / 10

## Teaching & writing

### Sharing how the work gets done

I teach the methods behind the findings, from hands-on investigation to actionable fixes.

- **Fuzzing, Reverse Engineering & Offensive Security:** internal curriculum for interns and cross-functional engineers at Festo.
- **Threat Hunting:** a student course covering methodology, detection fundamentals, and investigation.
- **API Security:** live demonstrations of broken object-level authorisation, mass assignment, and business-logic chains.
- **Active Directory Attack & Defense:** practical detection and hardening guidance.
- **Reverse Engineering & Exploit Development:** static analysis through memory-corruption attack chains.
- **Firmware Reversing:** second-order injections across trust boundaries.

I also write about fuzzing harnesses, firmware reversing, testing beyond scanners, and prompt injection in practice.

[Read my technical notes ↗](https://0xdhanesh.gitbook.io/)

## About

### Hardware roots. A systems perspective.

I'm from India and now work in Dubai. My path started in electrical and electronic engineering before moving into computer science and offensive security. That hardware foundation shapes how I investigate software: follow the data, question the assumptions, and look across the boundaries between systems.

I believe a finding is useful when engineering can act on it. I focus on clear reproduction steps, practical fixes, and communication that works for both developers and leadership. Teaching and open-source tools help that knowledge travel beyond one person.

Outside production systems, I explore technical subjects I don't yet understand. I've completed HackTheBox Rasta Labs and the Lakera AI Security Course. Fuzzing harnesses and second-order injections are reliable ways to start a long conversation over coffee.
