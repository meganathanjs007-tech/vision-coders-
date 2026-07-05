# AEGIS-X Guardrail Prototype

This repository contains a defensive cybersecurity guardrail prototype for autonomous AI agents. The system sits between a tool-using agent and the model or tools it can call, enforcing policy, input inspection, and behavioral monitoring outside the prompt.

## What this prototype does
- Intercepts agent requests through a gateway.
- Applies a 3-layer input inspector cascade: regex heuristics, seeded injection-library matching, and a fallback decision path.
- Evaluates declarative policy rules from [policy/rules.json](policy/rules.json).
- Enforces tool-call scope before execution.
- Tracks per-agent behavior and flags anomalies using a simple z-score baseline.
- Streams events to a live dashboard and persists them to a local audit log.

## One-command deploy
Run:

```bash
npm run deploy
```

This starts the gateway on port 3001.

## Demo scenarios
The demo runner exercises three scenarios:
1. Clean run with a benign request.
2. Direct injection attempt that is blocked by the input inspector.
3. A subtle behavioral anomaly that is blocked by the anomaly detector.

Run:

```bash
node demo/run-demo.js
```

## Honest assessment
This is a defensive prototype, not a production security product.

### What it catches
- Direct prompt injection phrases such as “ignore previous instructions”.
- Tool calls that do not match the declared policy.
- Behavioral deviations from an agent baseline.

### What it does not catch
- All possible prompt injection variants.
- Sophisticated jailbreaks or novel attacks without additional tuning.
- Real-world production threats without broader threat modeling and testing.

### Measured false-positive rate
The benign test set in [demo/benign-set.json](demo/benign-set.json) was evaluated with [demo/evaluate-benign.js](demo/evaluate-benign.js).

Current measured false-positive rate: 0.0% on the provided benign set.

## Structure
- [gateway/](gateway/)
- [policy/](policy/)
- [detectors/](detectors/)
- [dashboard/](dashboard/)
- [demo/](demo/)
