# OpenWDL Blog Design

## Purpose

The OpenWDL blog is the public record of a technical standard. Its design presents releases, tooling, guides, and community reports as a durable ledger rather than a high-volume news feed. The page remains useful during irregular publishing periods because it emphasizes the latest valid record, not artificial freshness.

The design also makes authorship visible. Every post pairs its title with the portrait and full name of each author so the archive reflects the people who shape WDL.

## Visual Direction

The blog uses **The Ledger** direction. It extends the established OpenWDL system with a dark Cool Gray foundation, restrained teal accents, Public Sans for editorial text, Martian Mono for record labels, and a low-contrast dotted grid behind the featured entry only.

Teal identifies the current release, links, focus states, and small structural labels. Neutral surfaces and hairline borders carry the rest of the page. Portraits provide the primary visual variation; the layout does not depend on decorative post illustrations.

The canonical `OpenWDLNav` marks `Blog` as the current destination. The canonical community banner and footer close both the homepage and article pages.

## Homepage Structure

The homepage contains four zones:

1. **Ledger masthead.** A compact heading identifies `The OpenWDL ledger` and describes it as releases, tooling, and reports from the open standard.
2. **Featured entry.** The most recently published post becomes the current entry. It receives the largest type, a short standfirst, its version or genre label, a primary reading action, and an author profile with an `82px` circular portrait and full name. A low-density dotted grid appears only in this zone.
3. **Complete register.** One chronological list contains every post without pagination at the current catalog size. Each row shows a record chip, title, short summary, author presentation, publication year, and estimated reading time.
4. **Community and footer.** The standard OpenWDL community banner and footer provide participation links and ecosystem navigation.

Release posts use their semantic version as the record chip, e.g., `v1.3`, `v1.2.1`, or `v1.1.3`. Other posts use one stable genre label:

- `REPORT` covers surveys and research findings.
- `TOOL` covers implementations and development tools.
- `GUIDE` covers reusable practices and instructional material.
- `META` covers OpenWDL website or project communication.

The labels describe the post's function. They do not reproduce the current broad URL categories, e.g., `wdl`, `bioinformatics`, or `workflows`.

## Author Presentation

Authorship is part of each entry's primary hierarchy. A standard register row uses a `47px` circular portrait beside the author's full name. The name remains visible text and never depends on image alternative text or hover state.

A coauthored post overlaps adjacent portraits by `14px` and follows them with every author's written name. The overlap must not obscure faces or alter keyboard order. The layout does not collapse multiple authors into `and others`.

The featured entry uses an `82px` portrait with a subtle teal border and a `Written by` label. The author name links to the registry's profile URL when one exists. The interface renders plain text when the registry omits that URL.

## Article Page

The article header presents the genre or version label, title, standfirst, and a prominent byline card. The byline card contains every author's portrait and full name, the publication date, and estimated reading time.

Article prose uses a maximum measure of `68ch` and a `1.7` line height. Desktop pages include a sticky `On this page` rail generated from second-level headings. Mobile pages render the same links in an inline disclosure before the article body.

Code blocks extend beyond the prose measure up to a maximum width of `840px` so WDL examples remain legible. Every code block identifies its language, uses horizontal scrolling rather than wrapping long source lines, and provides the shared copy action. Inline code uses the existing OpenWDL code treatment.

Release announcements add a compact facts strip below the header. It can link to the specification, GitHub tag or milestone, migration notes, and a breaking-change summary when those values exist. Empty cells do not render.

At the end of a release article, previous and next links navigate between release records rather than between unrelated posts. Posts in other genres navigate to the adjacent entry in the same genre. The interface omits a direction when no adjacent entry exists.

## Content Model

Each post stores a title, slug, publication timestamp, standfirst, genre, source content, and one or more author profile identifiers. The build calculates reading time from source content at `225` words per minute and rounds up to the next minute. Release posts also store a semantic version and can store specification, milestone, tag, and migration links.

A shared author registry stores a stable identifier, full name, portrait path, and optional profile URL. Post metadata references identifiers rather than duplicating display names or portrait URLs. This keeps homepage rows, article bylines, metadata, and future author pages consistent.

Existing content maps to the registry as follows:

- `clay-mcleod` identifies Clay McLeod.
- `venkat-malladi` identifies Venkat Malladi.
- `john-didion` identifies John Didion.

The WDL `1.2.0` announcement references both `venkat-malladi` and `john-didion`. The content model preserves author order.

## Validation and Failure Behavior

The content build rejects a post with no author, an unknown author identifier, an empty author name, an invalid genre, or a release label without a parseable semantic version. These failures identify the post and invalid field.

A profile without a portrait renders a deterministic initials avatar with the author's full name available to assistive technology. The site does not render a broken image or silently omit the author. Image-loading failures use the same initials treatment.

The register sorts posts by publication timestamp in descending order. Posts with identical timestamps use a stable secondary order based on slug so builds produce deterministic output.

## Responsive Behavior

Desktop register rows use four aligned columns for record, entry, author, and publication metadata. At narrower widths, each row becomes a two-column layout with the record chip in the first column and title, author, and date stacked in the second. Portraits remain visible at every supported viewport.

The featured entry moves from version, story, and author columns to a single column. Its author treatment becomes a horizontal profile block beneath the story. The navigation follows the approved canonical mobile behavior.

No archive content hides behind carousels, accordions, or pagination at the current catalog size.

## Accessibility

The register is an ordered list of articles with one descriptive link per post title. Decorative portraits use empty alternative text because the adjacent visible name provides the same identity; a portrait that serves as the only author link uses the author's full name as its accessible label.

All teal text and controls meet WCAG AA contrast against their surfaces. Portrait borders do not carry information. Keyboard focus remains visible on post links, author links, code-copy controls, contents links, and footer actions.

The dotted grid remains decorative, low contrast, and excluded from the accessibility tree. Reduced-motion preferences remove nonessential entry and hover transforms. Reading and navigation order match the visual order on desktop and mobile.

## Tests

Component tests cover a single author, multiple authors in preserved order, a missing portrait fallback, an optional profile link, release and non-release chips, stable sorting for equal timestamps, and omission of empty release-fact cells.

Integration tests verify that all ten existing posts render in the register with the correct author names, that the WDL `1.2.0` announcement shows both authors, and that article bylines match register bylines. Tests also cover the mobile contents disclosure, previous and next release navigation, keyboard order, accessible names, and code-copy behavior.

Visual tests cover desktop and mobile homepage states, long names, two authors, the initials fallback, a long article title, and code that exceeds the prose measure. The blog and article pages must pass the repository's existing accessibility, package, site, and production-build checks.

## Scope

This design covers the blog homepage, article layout, author presentation, content metadata, responsive behavior, and related validation. It does not add search, comments, reactions, newsletters, author directory pages, topic filtering, post illustrations, or pagination. Those features require demonstrated content volume or a separate design.
