# Oikos

**Follow the incentive. See the whole cost.**

An economics-and-incentives learning experience, with ethics throughout. Oikos is a new sibling of the Panhellenic course family: Carpe → Objection → Agora → Oikos. It retains the family's actual interface and semantic learning engine: a centered phone-width path, raised lesson stones, expressive mascot, short sittings, varied retrieval, cold transfer and spaced review. Pip, a beaver, guides the new course.

## Open source, and the family

Oikos is free and open source (MIT). **If it helps you, please [star the repo](https://github.com/ionpetro/oikos)**: a star helps other people find it. Corrections and pull requests are welcome.

Oikos is one of eight free, open-source learning apps built the same way (short daily lessons and spaced review):

- **Skepsis**: the Greek hiding in everyday English. [Play](https://skepsis-greek.vercel.app) · [GitHub](https://github.com/ionpetro/skepsis)
- **Carpe**: Latin for Greece's national exams. [Play](https://carpe-latin.vercel.app) · [GitHub](https://github.com/ionpetro/carpe)
- **Gnothi**: Ancient Greek for Greece's national exams. [Play](https://gnothi-greek.vercel.app) · [GitHub](https://github.com/ionpetro/gnothi)
- **Objection**: prep for the US bar exam (MBE). [Play](https://objection-bar.vercel.app) · [GitHub](https://github.com/ionpetro/objection)
- **Agora**: sales and negotiation, with ethics. [Play](https://agora-sales-xi.vercel.app) · [GitHub](https://github.com/ionpetro/agora)
- **Oikos** (this one): economics and incentives. [Play](https://oikos-azure-five.vercel.app) · [GitHub](https://github.com/ionpetro/oikos)
- **Guanxi**: Mandarin and local culture. [Play](https://guanxi-mandarin.vercel.app) · [GitHub](https://github.com/ionpetro/guanxi)
- **Everyday Ethics**: everyday choices and ethical judgment. [Private preview](https://everyday-ethics-ion.wintrypenny4.chatgpt.site) · [GitHub](https://github.com/ionpetro/everyday-ethics)

## Run locally

No application dependencies to install. A recent Node.js and Python 3 are sufficient.

```sh
npm test
npm run validate
npm run build
npm run dev
```

The local course is served at `http://127.0.0.1:4390/`; the complete static build is in `dist/`. Production builds require all twelve units. The authoring fixture is excluded.

## Vercel deployment

Live course: https://oikos-azure-five.vercel.app

The Vercel project is `oikos` in `ion-petropoulos-projects`. `vercel.json` builds the course with `node app/build.mjs` and serves only `dist/`. `.vercelignore` excludes local work, research, test files and the separate Sites configuration from upload.

From this linked checkout, deploy an update with:

```sh
vercel deploy --prod --scope ion-petropoulos-projects
```

The Vercel course opens without a sign-in. Learning progress is local to each domain; use Me → Export/Import to move a backup between hosts.

## Course

Twelve units, four lessons per unit, plus a mixed boundary roundup for each unit:

1. Choices and opportunity cost
2. Marginal decisions and sunk costs
3. Incentives and unintended consequences
4. Markets, prices and model assumptions
5. Responsiveness and tax incidence
6. External costs and benefits
7. Shared resources and cooperation
8. Information asymmetry
9. Market power and constrained choice
10. Work, contracts and measurement
11. Distribution and wellbeing
12. Evidence and policy evaluation

Lessons teach definitions and conditional reasoning with original examples. They distinguish empirical evidence, conditional models, practical guidance, ethical commitments and fictional cases. Scored questions have explicit criteria; competing defensible values belong in reflection. An efficient outcome is not automatically a fair outcome, and simulated payoffs are not predictions of human behavior.

## Six rule labs

Predict → choose a rule → inspect the calculation → change an assumption → reflect.

- **You get what you count:** compare cash rewards for logged closures and verified resolutions.
- **Who really pays?:** change demand response, a per-unit tax and who remits it.
- **The missing invoice:** include costs borne by neighbors in a production comparison.
- **One lake, four fleets:** compare three seasons under a catch limit and imperfect compliance.
- **The shared pot:** distinguish individual and collective monetary incentives.
- **The same total, different lives:** allocate a fixed fund using different criteria.

All parameters are fictional and all assumptions are stated. The models expose calculations and affected perspectives. They assign no moral score. Reflections save locally.

## Learning method and authoring

The actual inherited engine supplies an unscored first guess, direct teaching, immediate retrieval, a separate harder-practice phase, held-back transfer, older due questions and end-of-sitting retries. Native kinds include principles, scenarios, arguments, procedures, matching, sorting, numbers, terms and misconception repair. Roundups include genuine boundary cases. Spaced return uses 1/3/7/14/30/60-day intervals; same-day repetition does not skip boxes. Weekends and weekly freezes keep streaks forgiving. Ordinary practice is untimed; complex calculations and ethical judgments do not enter the speed game.

`research/CURRICULUM.md` records scope and the research → curriculum → core → writing → two independent adversarial reviews → QA/critic → publication workflow. The authoring contract is `app/CONTENT_SCHEMA.md`. Every production unit is a literal module in `app/src/units/`. `app/src/models.js` holds the independent pure calculators; `app/test/models.test.js` checks all input combinations, accounting identities and boundary cases.

The inherited framework has been adapted for economics: explicit model provenance, authored numerical misconceptions, and numerical grading that preserves signs, scale, currency and units. Numerical aliases are authored, not arbitrary tolerance. Source notes state support and limits; original textbook exercises are not copied.

## Progress and privacy

Browser-local progress is isolated from Agora and the other courses. Export/import in Me backs up progress and reflections. The production website sends visit and learning events to PostHog for Pulse, without typed text or recordings. There is no live AI grading or cross-device synchronization. Fonts load from Google Fonts with local fallbacks. Private hosting may require ChatGPT sign-in; that does not synchronize learning data.

MIT licensed. The source and delivery settings for this new experience are separate from every existing course. `.openai/hosting.json` identifies its own private Site.
