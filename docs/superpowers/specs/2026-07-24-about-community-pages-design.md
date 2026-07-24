# About and Community pages

## Purpose

The OpenWDL site adds two first-class pages with distinct jobs. `/about/`
explains why workflow description languages exist, how WDL addresses that
problem, where WDL originated, and how it became the open standard maintained
today. `/community/` helps a visitor choose a concrete way to participate.

The About page speaks first to people encountering WDL and to technical leaders
evaluating workflow standards. It remains conceptual and contains no code. The
Community page serves readers who want help, examples, contribution paths, or a
way to influence the language.

## Global navigation

The canonical navigation becomes `About`, `Community`, `Docs`, `Spec`, and
`Blog`, followed by the existing GitHub utility and `Get started` action.
`About` and `Community` link to their new local routes and support active
states. `Specification` is shortened to `Spec` and links directly to
`https://github.com/openwdl/wdl`.

The new pages use the canonical `OpenWDLNav` and `OpenWDLFooter`. Their internal
links remain base-aware so both the `/brand/` preview and production-root builds
work.

## About page

### Narrative

The page opens with the claim that complex analysis should not become
infrastructure archaeology. It then makes the workflow problem concrete: a real
analysis must describe which tools run, what data each step consumes and
produces, which steps can run in parallel, what resources they need, and what
happens when work fails. Without a shared description, those decisions become
scattered across scripts, scheduler configuration, containers, and
institutional knowledge. The result becomes hard to understand, reproduce,
scale, and move.

The WDL approach follows immediately. WDL makes tasks, inputs, outputs,
dependencies, parallelism, conditions, containers, and resource needs explicit
in a human-readable document. A WDL execution engine interprets that description
for the local, cluster, HPC, or cloud environments it supports. The page states
the separation plainly: workflow authors describe the analysis, platform teams
provide reliable execution, and both reason from the same document.

The second half tells WDL's story. Genomics appears as the proving ground that
forced teams to confront large data, many tools, parallel execution, and
reproducibility. The narrative identifies the Broad Institute as WDL's place of
origin, then explains why a growing user and implementer community moved
stewardship into the OpenWDL organization and an open RFC process.

### Timeline

A short timeline supports the narrative rather than replacing it:

- `2012`—the early Broad Institute language and tooling repository begins.
- `2015`—modern WDL drafts and the Cromwell execution engine establish the
  recognizable task-and-workflow model.
- `2017`—the OpenWDL organization forms to steward WDL as a community standard.
- `2021`—WDL `1.1` is approved through the community specification process.
- `2026`—WDL `1.3.0`, the latest stable release, is published on January 12.

The page does not assign a date to WDL `1.0`, claim unsupported adoption
numbers, describe WDL as having originated specifically for GATK, or treat
unreleased `1.3.1` branch changes as a release.

### WDL today

The final narrative section presents WDL as a community-governed language with
a formal specification, multiple conformance-tested execution engines, and
support across local, HPC, and cloud environments. It avoids naming a single
engine as the reference implementation and links readers to the live ecosystem
documentation for current engine support.

Equal closing actions lead to the first learning guide and the Community page.
The section does not subordinate community participation to product adoption.

### Sources

Historical claims use primary OpenWDL sources: the `openwdl/wdl` repository and
release history, the WDL `1.3` specification, the `openwdl/governance`
repository and RFC process, the existing OpenWDL About page, and the canonical
2017 Voss, Van der Auwera, and Gentry citation. Editorial copy may simplify
technical details, but it must not broaden a claim beyond those sources.

## Community page

### Introduction

The page opens with a short, warm invitation: WDL grows through the questions,
workflows, tools, tests, and proposals its community shares. The page does not
maintain a roster of people or organization logos. A brief closing note explains
the roles of workflow authors, users, implementers, contributors, and governance
members, then links to the live OpenWDL GitHub organization and governance
roster.

### Involvement gallery

The page centers on a responsive gallery of six concrete paths:

- **Join the conversation.** Join the OpenWDL Slack workspace to ask questions
  and meet users and implementers.
- **Attend a meeting.** Join Slack and use `#general` to find current community
  and governance meeting information.
- **Share workflows.** Browse and publish reusable WDL workflows through the
  ecosystem resources linked from the site.
- **Improve docs and code.** Find repositories, issues, and contribution work
  in the OpenWDL GitHub organization.
- **Build and test engines.** Use the execution-engine and conformance resources
  to improve portable implementations.
- **Shape the specification.** Read the governance repository's RFC process and
  bring language proposals into public discussion.

Each card has a title, one-sentence description, explicit action label, and
authoritative destination. `Join the conversation` and `Attend a meeting` use
the canonical Slack invite; the meeting card tells readers to ask in
`#general`. `Share workflows` links to
`/docs/run/ecosystem/#community-workflows`. `Improve docs and code` links to
`https://github.com/openwdl`. `Build and test engines` links to
`/docs/run/ecosystem/#execution-engines`. `Shape the specification` links to
`https://github.com/openwdl/governance/blob/main/RFC.md`.

The gallery uses three columns on wide screens, two at intermediate widths, and
one on narrow screens. DOM order remains reading order at every breakpoint.

### Photography

Each gallery card reserves a fixed-aspect media area. The first implementation
uses intentional OpenWDL-branded color placeholders rather than generic stock
photography. Approved photographs of OpenWDL contributors, meetings, and events
can replace those placeholders later without changing card geometry.

Every future photograph requires documented reuse permission, meaningful alt
text when it conveys content, an empty alt attribute when decorative, and a
visible or programmatically associated credit. The site does not fetch remote
images or silently fall back when an image fails.

## Architecture

`about` and `community` become new `SiteRoute` variants and entries in
`SITE_ROUTES`. `SiteApp` delegates each route to a focused page component.
Prerendering emits `/about/index.html` and `/community/index.html` with page
specific title, description, canonical URL, and indexable robots behavior.

Each page owns a CSS Module and small presentational sections. The Community
gallery reads from a typed local card list so all six titles, descriptions,
actions, and destinations remain aligned. Neither page performs client-side
data fetching or requires interactive state.

The canonical `OpenWDLNav` adds `community` to its active-page type and
destination list. The component changes the `Specification` label to `Spec` and
points it at the specification repository. The footer adds Community to its
Explore links so the page remains discoverable outside the primary navigation.

`RELEASE.md` adds the About page to the stable-version audit. A WDL release must
update the explicit current-version statement and verify that the historical
timeline remains accurate; historical version references must not be
mass-replaced.

## Accessibility and responsive behavior

Each page has one `<main>` and one `<h1>`. Section headings follow a logical
hierarchy. Link text describes the destination without relying on card
position, color, or an unlabeled arrow. External destinations use descriptive
accessible names and do not force a new browsing context.

Text and controls meet the existing theme contrast and focus conventions.
Decorative treatment does not encode required meaning. The layouts avoid
horizontal scrolling at supported widths and honor reduced-motion preferences;
the pages add no required animation.

## Verification

Route tests cover `/about/` and `/community/` under both `/brand/` and `/`
bases. Component tests assert the single heading, canonical chrome, active nav
state, closing actions, six Community paths, role note, and direct Spec
repository destination. About tests assert the required narrative sections and
sourced timeline milestones without coupling to complete paragraph copy.

Prerender and static-output tests verify both HTML documents, their metadata,
base-aware assets, canonical URLs, and indexable robots behavior. Responsive
checks prove that the About comparison and Community gallery collapse without
overflow and preserve DOM order. The full site, UI package, lint, build,
prerender, and dual-base checks remain green.
