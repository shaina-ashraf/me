# Shaina Ashraf — Research, Engineering & Education

A static portfolio for research and industry audiences. No dependencies or build step.

- Website: https://shaina-ashraf.github.io/me/
- Repository: https://github.com/shaina-ashraf/me
- Hosting: GitHub Pages, `main` branch, `/ (root)`.
- Files: `index.html`, `styles.css`, `site.js`, `favicon.svg`, `.nojekyll`.

## Structure

A persistent profile sidebar and five distinct views:

1. **About** — career narrative, complementary research/engineering/education strengths, technical expertise.
2. **Experience** — reverse-chronological professional timeline and education.
3. **Research** — five project case studies and five publication/preprint records.
4. **Teaching** — five courses taught, undergraduate final-year-project supervision, master’s supervision and research mentoring.
5. **Contact** — public email, LinkedIn, GitHub, Google Scholar and CAISA profile.

Layout inspiration: https://vahidsj.github.io/ — profile sidebar and separate résumé/research/teaching/contact views. The colours, typography, text and implementation are this portfolio's own. No reference-site images or personal content were reused.

`site.js` selects a panel from the URL fragment, updates navigation and page titles, and supports browser history and refresh. Earlier `#projects`, `#publications`, `#expertise` and `#contact` links remain supported. Without JavaScript, all sections remain readable. Print styling exposes all sections.

## Content sources

- Direct statements from Shaina: current Bonn/CAISA role, PhD candidacy, LLM/generative AI/model-training expertise, public email and LinkedIn, and contributions across dataset/annotation design, coding, training, evaluation and supervision.
- Supplied CV: `Shaina_Ashraf_CV_Updated_2026.pdf`. Used for employment chronology, education, teaching, technical skills and Google Scholar link. The original PDF remains outside the repository and is not published.
- Direct follow-up from Shaina: courses taught are Software Engineering, Web Engineering, Data Structures, Databases and Design Patterns; supervised more than 50 bachelor’s students for final-year projects and 3 master’s students during the PhD. Counts refer to students, with no claim that the master’s students have graduated.
- Reviewed publication PDFs, cross-checked with the public records below.

| Project | Public source | Status used |
| --- | --- | --- |
| DeFaktS | https://aclanthology.org/2024.lrec-main.409/ | LREC-COLING 2024; first author |
| User-context modelling | https://aclanthology.org/2024.woah-1.11/ | WOAH 2024; first author |
| MultiProp | https://aclanthology.org/2025.abjadnlp-1.2/ | AbjadNLP 2025; coauthor |
| Fact-checked claim retrieval | https://aclanthology.org/2025.semeval-1.183/ | SemEval 2025; coauthor |
| Conspiracy Frame | https://arxiv.org/abs/2603.21368 | Public preprint, 2026; coauthor |

Lab profile: https://caisa-lab.github.io/members/shaina.html

## Career chronology from the supplied CV

| Role | Organisation | Dates |
| --- | --- | --- |
| Research Assistant | University of Bonn | Aug 2026–present |
| Research Assistant | Philipps-Universität Marburg | Jul 2022–Mar 2026 |
| Faculty Lecturer | COMSATS University, Islamabad | Jan 2016–Dec 2021 |
| Software Engineer (Mobile) | Coeus Solutions | Dec 2011–Mar 2013 |
| Software Engineer | Sunztech Intl & TimeLeeTech | Aug 2008–Nov 2010 |

Education: PhD in Computer Science at the University of Bonn, in progress; MS in Computer Science at COMSATS University, December 2015. Employment gaps and combined employer entries are preserved as supplied. No undocumented title or total-years claim is added.

## Content boundaries

- Authorship credits remain intact. Overall contributions were confirmed by Shaina; detailed ownership, leadership scope and metrics for each project have not been independently specified.
- Career and software-stack descriptions come from the supplied CV. RAG experience is described as career experience; the SemEval claim-retrieval project remains a retrieval/reranking project.
- Preserve the distinction between published papers and the Conspiracy Frame preprint. The anonymous indoctrination manuscript is not uploaded or listed as a publication; the general research topic is supported by the CV.
- Applied-relevance descriptions explain potential uses, without claiming business outcomes or commercial deployments.
- No benchmark headline metrics are promoted. Future metrics require task/split/denominator verification; the SemEval paper contains differing score statements.
- The private CV and phone number are not published. The CV action opens an email request. No photo is used; the profile uses an initials monogram.
- Sidebar location is Germany: the CV lists Munich, while the institutional affiliation is Bonn. These are not conflated.
- No contact form, analytics, cookies or external fonts.

## Validation — 30 October 2026

- Reviewed both substantive pages of the supplied CV and inspected the reference site's sidebar and section navigation.
- Verified five panel routes, navigation highlighting, project expansion, direct publication links, refresh and browser back navigation locally.
- Checked Experience, Research and Contact at 390 px: no document-level horizontal overflow.
- Checked all HTML IDs/anchor targets/assets, retained five projects and five publications, and checked that the phone number is absent.
- Published app commit: `ca2ab492c52f29b2fa12198459f5e463b380d679`.
- Deployment: https://github.com/shaina-ashraf/me/actions/runs/41125871021 — build, report and deploy jobs succeeded.
- Verified the clean public URL: five panel navigation links, five dated roles, two education entries, five taught courses and the confirmed 50+/3 supervision figures.
- CSS and JavaScript loaded and panel switching worked on the live site. A cache-busting query was used during rollout; the clean address was then reloaded and verified.

## Local preview

In macOS Terminal from the project directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 and stop with Ctrl+C.

## Update and publish

Edit HTML for content, CSS for layout and `site.js` for panel navigation. Keep links and asset paths relative to support the `/me/` project URL. Bump the stylesheet/script query version when changing those assets. Commit to `main`, wait for GitHub Pages and verify the live result.

## Next content pass

Optional additions: a portrait supplied by Shaina, a public CV version, and project-specific code links and contribution details. Add further course descriptions, supervised thesis titles and outcomes only when supplied or verified.
