# Research claim map

This file separates what the talk can safely claim from what remains an emerging practice or a personal interpretation.

## 1. Fluent answers can create false confidence

**Safe talk wording:** More capable and instructable models can produce apparently sensible wrong answers that people miss. A polished answer is not evidence of correctness.

**Primary source:** [Larger and more instructable language models become less reliable](https://www.nature.com/articles/s41586-024-07930-y), Nature, 2024.

**Limit:** This is broad model-behaviour research, not a direct study of coding-agent repositories.

## 2. Iterative feedback can outperform one-shot generation

**Safe talk wording:** Controlled feedback-and-refinement loops have improved outputs over one-step generation across diverse benchmark tasks.

**Primary source:** [Self-Refine: Iterative Refinement with Self-Feedback](https://arxiv.org/abs/2303.17651), Madaan et al., 2023.

**Limit:** The study’s tasks and models do not establish that every self-review loop improves software engineering. Evaluation criteria still matter.

## 3. Structured multi-agent debate can improve reasoning and factuality

**Safe talk wording:** In controlled experiments, structured debate between model instances improved performance on several reasoning tasks and reduced factual errors.

**Primary source:** [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://proceedings.mlr.press/v235/du24e.html), Du et al., ICML 2024.

**Limit:** This supports debate as a promising technique, not “more agents equals truth.”

## 4. Adversarial evidence can help a weaker judge

**Safe talk wording:** In an experimental question-answering setting, debate helped weaker model and human judges identify correct answers better than naive baselines.

**Primary source:** [Debating with More Persuasive LLMs Leads to More Truthful Answers](https://proceedings.mlr.press/v235/khan24a.html), Khan et al., ICML 2024.

**Limit:** The setup was designed for scalable oversight and does not directly validate arbitrary planner/reviewer personas in software delivery.

## 5. Debate can drift and degrade

**Safe talk wording:** Longer or poorly structured multi-agent debate can drift away from the task; lack of progress, weak feedback, and unclear goals are common failure modes.

**Primary source:** [Stay Focused: Problem Drift in Multi-Agent Debate](https://aclanthology.org/2026.findings-eacl.268/), Becker et al., Findings of EACL 2026.

**Implication for the framework:** reviewers get criteria and evidence; iterations are capped; unresolvable decisions escalate to a human.

## 6. Evaluator–optimizer loops work best with clear criteria

**Safe talk wording:** Industry guidance recommends evaluator–optimizer workflows when evaluation criteria are clear and iterative feedback provides demonstrable value.

**Primary practitioner source:** [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), Anthropic, 2024.

**Limit:** This is experience-based engineering guidance, not a peer-reviewed comparative software-engineering trial.

## 7. Repository context and enforced invariants become more important with agents

**Safe talk wording:** An agent-first engineering team reported that repository-local context, strict dependency direction, structural tests, and enforceable invariants were prerequisites for speed without architectural drift.

**Primary practitioner source:** [Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/), OpenAI, 2026.

**Limit:** This is one team’s experience building one product. It is evidence of a working approach, not a universal causal result.

## 8. Long-running agents need durable progress and context

**Safe talk wording:** Long-horizon coding work benefits from incremental progress, explicit state, fresh context windows, tests, and handoff artifacts.

**Primary practitioner sources:**

- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), Anthropic, 2025.
- [Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps), Anthropic, 2026.

**Limit:** Long-running autonomy is not the subject of this talk. It is supporting evidence for durable plans, checkpoints, and memory.

## 9. “Graph engineering” is emerging terminology

**Safe talk wording:** Graph engineering is an emerging label for making the topology of agent work explicit—tasks or agents as nodes; dependencies, gates, branches, shared state, retries, and stop conditions as edges and control flow.

**Primary emerging source:** [What makes prompts a graph: necessary and sufficient conditions for prompt graph engineering](https://arxiv.org/abs/2607.27578), Macedo, 2026 preprint.

**Limit:** The term is new, loose, and not a settled discipline. It is easy to confuse with knowledge-graph engineering, GraphRAG, or ordinary workflow orchestration.

**Position in this repository:** the two-loop Markdown lifecycle is already a small explicit work graph. Introduce graph infrastructure only when branching, parallel coordination, dynamic routing, or durable shared state earns the added complexity.

## Synthesis used in the talk

The research does not prove the exact framework in `/plans`. It supports the design heuristics behind it:

- one-shot fluency is not enough;
- feedback can improve an initial output;
- adversarial evidence can aid oversight;
- unstructured debate can drift;
- clear criteria, gates, context, and executable evidence matter;
- durable repository artifacts support work that exceeds one prompt or context window.

The framework is therefore presented as a small, evidence-informed engineering heuristic—not as a scientifically optimal agent architecture.
