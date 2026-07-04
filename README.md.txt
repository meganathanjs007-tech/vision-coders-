# 🛡️ AI Guardrail Gateway

A real-time cybersecurity guardrail layer for autonomous AI agents.

This project was developed as a defensive security prototype for a hackathon. It sits between an AI agent and the resources it accesses (LLMs, tools, APIs, databases, and documents) to enforce security, safety, and policy rules before any action is executed.

---

## 📌 Problem Statement

Build a runtime guardrail system that intercepts every AI agent request and enforces:

- Behavioral Guardrails
- Content Guardrails
- Cybersecurity Guardrails

The goal is **measurable risk reduction**, not claiming to solve prompt injection or jailbreaking completely.

---

# ✨ Features

- 🛡️ Guardrail Gateway
- 🔍 3-Layer Input Inspector
    - Regex / Heuristic Detection
    - Embedding Similarity Detection
    - LLM-as-a-Judge
- 📜 YAML Policy Engine
- 🔐 Action Monitor
- 📊 Behavioral Anomaly Detection
- 📁 Persistent Audit Logs
- 📡 Live Dashboard
- ⚠️ Risk Score System
- 🚨 One-Click Kill Switch

---

# 🏗️ Project Structure

```
AI-Guardrail/

app/
components/
lib/
public/
demo/

README.md
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | Full Stack Framework |
| React | UI |
| Tailwind CSS | Styling |
| TypeScript | Development |
| SQLite | Audit Log Database |
| Gemini API | AI Model |
| YAML | Policy Engine |
| Socket.IO | Live Dashboard |

---

# 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to the project folder

```bash
cd AI-Guardrail
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

# 📂 Core Modules

## Gateway

Intercepts every request before it reaches the AI model.

---

## Content Detector

Checks every input for:

- Prompt Injection
- Jailbreak Attempts
- Unsafe Content
- Secret Leakage
- PII

---

## Policy Engine

Evaluates predefined YAML policies.

Example:

- Admin → Allow
- Employee → Require Approval
- Guest → Block

---

## Action Monitor

Verifies every tool call before execution.

---

## Behavioral Anomaly Detector

Builds a baseline of normal agent behavior and flags abnormal tool-call patterns.

---

## Dashboard

Displays

- Live Requests
- Audit Logs
- Risk Scores
- Alerts
- Kill Switch

---

# 🎯 Demo Scenarios

### Scenario 1

Normal request

Expected Result:

✅ Allowed

---

### Scenario 2

Direct Prompt Injection

Expected Result:

❌ Blocked

Reason logged.

---

### Scenario 3

Subtle Prompt Injection

Expected Result:

Behavior detector identifies abnormal tool usage.

---

# 📈 Future Improvements

- Multi-Agent Support
- Vector Database
- Better Embedding Models
- Advanced Threat Intelligence
- SIEM Integration

---

# ⚠️ Disclaimer

This project is a defensive cybersecurity prototype developed for educational and hackathon purposes.

It is **not** a production-ready security product and should not be used to protect real-world systems without proper security reviews, penetration testing, and threat modeling.

This project does **not** claim to completely solve prompt injection or jailbreak attacks. Instead, it demonstrates layered security techniques that reduce risk through policy enforcement, behavioral monitoring, and content inspection.

---

# 📜 License

MIT License

---

# 👨‍💻 Team

Developed for the RoboVanta Hackathon.