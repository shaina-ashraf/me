# Shaina Ashraf — Research & Applied AI Portfolio

Static portfolio for research and industry audiences. No dependencies or build step.

- Website: https://shaina-ashraf.github.io/me/
- Repository: https://github.com/shaina-ashraf/me
- Hosting: GitHub Pages, `main` branch, `/ (root)`.
- Page files: `index.html`, `styles.css`, `favicon.svg`, `.nojekyll`.

## Content and positioning

The page introduces Shaina as a PhD candidate at the University of Bonn and a research assistant in CAISA Lab, as supplied directly by Shaina. Core expertise supplied by Shaina: LLMs, generative AI and model training. The portfolio connects this background with multilingual NLP, retrieval, classification, data and evaluation through five sourced collaborative projects.

Sections: introduction, about, selected projects, expertise, publications, contact. Four project cards use native expandable details. Public contact routes use the email and LinkedIn supplied by Shaina, alongside GitHub and the CAISA profile. No contact form, analytics, cookies or external fonts.

## Sources

The supplied paper collection was reviewed alongside public records. Link to public paper records rather than uploading manuscript copies.

| Project | Public source | Status used |
| --- | --- | --- |
| DeFaktS | https://aclanthology.org/2024.lrec-main.409/ | LREC-COLING 2024; first author |
| User-context modelling | https://aclanthology.org/2024.woah-1.11/ | WOAH 2024; first author |
| MultiProp | https://aclanthology.org/2025.abjadnlp-1.2/ | AbjadNLP 2025; coauthor |
| Fact-checked claim retrieval | https://aclanthology.org/2025.semeval-1.183/ | SemEval 2025; coauthor |
| Conspiracy Frame | https://arxiv.org/abs/2603.21368 | Public preprint, 2026; coauthor |

Lab profile: https://caisa-lab.github.io/members/shaina.html

## Content boundaries

- Authorship is verified; specific individual implementation, leadership and supervision responsibilities remain to be confirmed.
- Project methods describe the collaborative work. Applied-relevance descriptions connect those methods to potential uses; they do not claim commercial deployment or business outcomes.
- Keep preprints distinct from peer-reviewed publications. An anonymous manuscript without a verified public record was excluded from the public page.
- Do not present prompt-based retrieval as a deployed RAG application or as LLM fine-tuning.
- No performance headline scores are currently displayed. Any future metric needs its task, evaluation split and denominator checked against the source. The SemEval paper contains differing score statements, so no single score was promoted.
- Public email and LinkedIn were supplied directly by Shaina and added to the contact section on 30 October 2026. No CV, photo or unverified software stack has been added.

## Validation — 30 October 2026

- Reviewed supplied PDFs and verified public titles, authorship, venues and preprint status.
- Previewed the page and opened project details in the browser.
- Checked responsive rendering at 390 px; no horizontal overflow.
- Checked unique HTML IDs, in-page anchor targets, stylesheet and favicon paths, and Git whitespace errors.
- Content commit: `57b1a3ee2dc7fef0fdf9e8342ddf671e23b7890c`.
- Deployment: https://github.com/shaina-ashraf/me/actions/runs/41124004655 — build and deploy jobs succeeded.
- Verified the public page: updated title, five project summaries, five publication entries, loaded stylesheet, and no remaining starter placeholder.

## Local preview

From the project directory in macOS Terminal:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 and stop with Ctrl+C. The site also works by opening `index.html` directly.

## Update and publish

Edit the HTML for content and CSS for styling. Keep asset links relative so the `/me/` project path works. Commit changes to `main`; GitHub Pages publishes the repository root automatically. Verify the resulting page and its project links after deployment.

## Next content pass

Confirm individual contributions for each project, a CV and visual preferences. Add concrete training details or code links only when verified and appropriate for public sharing.
