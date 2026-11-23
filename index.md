# Dhanesh Sivasamy

> Senior Offensive Security & Product Security Engineer. Based in Dubai, UAE. From India.

I have 4.5 years of experience assessing web, API, mobile, thick-client, firmware, and industrial systems across banking, media, and industrial automation. I combine reverse engineering, source review, and fuzzing with custom tooling and work with engineers to remediate findings. I currently assess banking applications and AI platforms in the UAE.

Contact: dhanesh.professional@gmail.com · +971 52 793 9507 · [LinkedIn](https://www.linkedin.com/in/dhanesh-sivasamy)

## Impact

### 12+
Critical & high-severity findings taken through remediation at Festo.

---

### 70%+
Of repetitive assessment workflows automated at Aujas.

---

### 4 → 10
Product Security team growth supported through hiring and mentoring.

## Selected work

### Kaisel

*iOS device integrity · Swift, C, Python*

Built a toolkit to detect jailbreaks, Frida, and debuggers. It cross-checks raw system calls against libc and compares independent dyld image views. Reports use App Attest and a Secure Enclave signature, verified by a reference Python server. Testing on physical devices documented detection misses.

[View Kaisel on GitHub](https://github.com/0xdhanesh/Kaisel)

---

### Beru

*Memory safety labs · C, C++, Docker*

Built 15 labs covering stack, global, and heap overflows and Windows SEH overwrite. Each includes a vulnerable program, a fixed version, and a guide. The Docker build harness cross-compiles for six targets with standard and hardened profiles.

[View Beru on GitHub](https://github.com/0xdhanesh/Beru)

---

### Igris

*Linux investigations · Python, FastAPI, BCC/eBPF*

Built a process and network monitor that records process lineage, network connections, loaded libraries, and call-site stacks in a local SQLite evidence store. It can fall back to polling `/proc` when eBPF is unavailable.

[View Igris on GitHub](https://github.com/0xdhanesh/Igris)

---

### STRIDE Threat Modeler

*Threat modeling · Browser, CLI, MCP*

Built a dependency-free offline tool compatible with Microsoft Threat Modeling Tool templates. Its MCP server lets AI agents build models from source code, and the tool supports evidence-based signal scoring and report export.

[View the STRIDE Threat Modeler on GitHub](https://github.com/0xdhanesh/STRIDE)

---

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

### Burp Suite MCP server

*Application security tooling · Kotlin*

Built an MCP server that connects AI clients to Burp Suite Repeater, Collaborator, and proxy history.

[View the Burp Suite MCP server on GitHub](https://github.com/0xdhanesh/mcp-server)

---

### Coordinated vulnerability disclosure

*Vulnerability research · CVE-2022-2912*

Credited as the discoverer of **CVE-2022-2912**, a cross-site request forgery issue that leads to server-side request forgery in the Craw Data WordPress plugin through version 1.0.0 (CVSS 4.3).

Listed in Oracle's Security Acknowledgements Hall of Fame for a separate disclosure.

[Read the CVE record ↗](https://www.cve.org/CVERecord?id=CVE-2022-2912)

## Experience

Most client work is confidential. These records describe the scope, approach, and outcomes I can share publicly.

### Happiest Minds Technologies

*Senior Engineer – Cyber Security · Jul 2026 – Present · Dubai, UAE · Client: Emirates NBD*

- Assess authentication, authorization, and business logic in banking web applications, APIs, and microservices. Use source-assisted review and SAST/DAST in CI/CD, validate fixes with developers, and map findings to CBUAE, DFSA, and PCI DSS controls.
- Discovered an authorization bypass in the backend orchestration layer of an AI-powered IVR platform that exposed confidential customer information.
- Identified NoSQL injection in a core banking platform and path and DLL hijacking issues in a thick-client application spanning Windows and macOS.
- Assess LLM workflows and agents for prompt injection chains, guardrail bypasses, excessive tool permissions, MCP integration weaknesses, and sensitive-data exposure through logging.
- Contribute to RASP testing, mobile assessments, and ad hoc red team engagements. Received recognition from senior leadership for the impact of these findings.

---

### Festo India Private Limited

*Senior Test Engineer – Security Testing (Product Security) · Mar 2025 – May 2026 · Bengaluru, India*

- Discovered a second-order command injection in an industrial gateway by reverse engineering its firmware and reviewing source code. The device had reportedly passed three external penetration tests, and the finding drew attention at Festo's German headquarters.
- Drove remediation of **12+ critical and high-severity vulnerabilities** across web applications, firmware, hardware, IoT devices, and industrial edge controllers, including second-order injections, RCE, and safety parameter bypass.
- Worked with development teams and executive leadership to close findings and align on long-term risk reduction.
- Investigated native-code and memory-safety vulnerabilities in industrial gateways, IoT devices, and controllers, and fuzzed **PROFINET and Modbus** implementations.
- Established the team's assessment reporting methodology and validated other engineers' findings. Contributed to threat analysis and risk assessment (TARA) aligned with the EU Cyber Resilience Act and IEC 62443.
- Helped grow the Product Security team **from 4 to 10 engineers**, conducted technical interviews, and mentored 6 engineers from non-security backgrounds.
- Delivered training in vulnerability analysis, reverse engineering, fuzzing, and offensive security. Mentored two interns in web application security and taught one a month-long foundation in assembly, system calls, and Ghidra.
- Presented research at an internal town hall, a senior executive leadership visit, and the Global Capability Center inauguration, including to representatives of major automotive customers.

---

### Aujas Cybersecurity (NuSummit)

*Senior Consultant · Jun 2022 – Mar 2025 · Bengaluru, India · Client: Sony India*

- Led web, API, Android, iOS, thick-client, and smart TV assessments (tvOS, webOS, Tizen) for OTT and media products, identifying payment-flow bypasses, DRM misconfigurations, business-logic flaws, and memory corruption.
- Reverse engineered proprietary protocols, instrumented applications with Frida, built custom fuzzers, and developed memory-corruption exploits and root-cause analyses, including for a critical issue on a shipping consumer device.
- Developed attack-centric threat models and performed IoT / hardware testing and firmware reverse engineering.
- **Automated over 70% of repetitive assessment workflows** with Python and Bash and strengthened static analysis with Fortify and Semgrep.
- Delivered executive-level vulnerability reports with actionable remediation guidance.
- Interviewed 25+ candidates against client requirements. Progressed from Trainee to Associate Consultant, Consultant, and Senior Consultant. Received Best Team, Emerging Champion, Bravo, SPOT, and Valuable Partner of the Quarter awards.

---

### Strongbox IT

*Security Analyst Intern · Jul 2021 – Nov 2021 · Chennai, India*

- Assessed web and mobile applications for BFSI and healthcare clients.
- Conducted performance testing with JMeter and contributed to Flask-based development of the Modshield SB Web Application Firewall.

## Expertise

### Application & offensive security

Web, API, Android, iOS, and Windows and macOS thick-client testing. Authentication, authorization, business-logic flaws, red teaming, and RASP assessment.

**Tools** · Burp Suite, Frida, MobSF.

---

### Reverse engineering & exploit development

Binary analysis, disassembly, decompilation, debugging, memory corruption, vulnerability research, and exploit development.

**Tools** · AFL++, Radamsa, custom fuzzers, Ghidra, IDA Pro, GDB, LLDB.

---

### Embedded, firmware & industrial

Embedded Linux firmware analysis, IoT and hardware assessment, Modbus and PROFINET fuzzing, and TARA aligned with IEC 62443 and the EU Cyber Resilience Act.

**Tools** · Logic analyzers, ChipWhisperer, binwalk, Scapy, Wireshark, Nmap.

---

### AI & LLM security

Direct, indirect, and second-order prompt injection, guardrail bypass, agent and tool abuse, Model Context Protocol (MCP) security, and OWASP LLM Top 10.

---

### Security engineering & automation

Source-code review, SAST/DAST, CI/CD security testing, STRIDE threat modeling, assessment automation, remediation, and custom tooling.

**Languages** · Python, C, C++, Swift, Kotlin, Java, JavaScript, Bash, PowerShell, x86 and ARM assembly (analysis).

**Tools** · Fortify, Semgrep, Docker, Git.

---

### Standards & frameworks

CBUAE, DFSA, PCI DSS, UAE IA Standards, ISO 27001, OWASP Top 10, OWASP API Security Top 10, MITRE ATT&CK, HIPAA, and Radio Equipment Directive.

## Credentials

### Certifications

- **OSCP** – Offensive Security Certified Professional *(2022)*
- **CRT** – CREST Registered Penetration Tester *(Jun 2026)*
- **CPSA** – CREST Practitioner Security Analyst *(Jun 2026)*
- **CAP** – Certified AppSec Practitioner, The SecOps Group
- **CNSP** – Certified Network Security Practitioner, The SecOps Group
- **Training** – Lakera AI Security Course

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

Outside production systems, I explore technical subjects I don't yet understand. I've completed HackTheBox Rasta Labs. Fuzzing harnesses and second-order injections are reliable ways to start a long conversation over coffee.

#### Personal details

- **Nationality** · Indian
- **Visa** · UAE employment visa (transferable)
- **Notice period** · 30 days
- **Languages** · English, Hindi, Tamil
