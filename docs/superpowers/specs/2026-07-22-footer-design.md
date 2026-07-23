# Community Banner Footer Design

## Purpose

The shared `Footer` presents OpenWDL’s community as the primary invitation rather than treating the footer as a passive directory. A high-contrast cyan banner leads with participation, while the body organizes the brand, site links, project repositories, and contact details. The legal bar stays quiet and accepts site-specific content without encoding licensing policy in the component library.

## Visual Structure

The footer spans the viewport so its borders and cyan banner form full-width bands. Every band contains a centered inner wrapper with `max-width: var(--maxw)` and `padding-inline: var(--space)`, aligning the footer with `Container` and `Nav`.

The footer has three zones:

1. **Community banner.** A cyan band contains a short heading and description on the left and icon-led action links on the right. The OpenWDL brand site uses “Build workflows in the open.” with actions for Slack and GitHub.
2. **Directory body.** A dark body places the OpenWDL logo and tagline on the left. Link columns on the right group destinations under compact uppercase labels such as `Explore`, `Projects`, and `Contact`.
3. **Legal bar.** A narrow, bordered strip shows the current-year copyright on the left and optional site-specific legal content on the right.

Public Sans carries the banner copy, body links, contact details, and legal text. Martian Mono appears only in the small uppercase column labels. This keeps the technical character without reducing long-form readability.

## Component Contract

`Footer` remains content-agnostic. It does not import OpenWDL assets, Slack or GitHub icons, repository URLs, email addresses, or licensing text.

The component accepts a `cta` object with a heading, optional description, and action links. Each action supplies a text label, destination, and optional icon node. The component accepts the existing logo, logo destination, tagline, and columns. `FooterLink` supports an `external` flag that adds a visible external-link indicator; action links use both a recognizable icon and visible text.

The component exposes `copyright` for the bottom-left notice and a generic optional `legal` node for bottom-right content. It removes the license-specific prop because licensing belongs to each consuming site. Inherited footer attributes and `className` continue to forward to the root `<footer>`.

The brand site supplies:

- A runtime copyright string, `© ${new Date().getFullYear()} The OpenWDL Developers.`
- The CC BY 4.0 notice as `legal`, because the notice applies to the brand guidelines and assets.
- Slack and GitHub action icons from the site’s existing `react-icons` dependency.
- Explore links for the OpenWDL home page, blog, documentation, and brand assets.
- Project links for the specification, governance, and brand repositories.
- `hello@openwdl.org` in the contact column.

## Link and Icon Behavior

Every action combines a decorative icon with a visible label, so the destination remains understandable when images fail or assistive technology ignores the icon. Icon nodes receive `aria-hidden` at the call site. Slack and GitHub retain their recognizable marks; other external destinations use the shared external-link indicator.

The brand site imports Slack and GitHub marks from its installed `react-icons` dependency. Neither the component nor the site fetches icon assets from a CDN. The action labels are `Join Slack` and `Follow on GitHub`.

External links do not force a new browser tab. The external indicator communicates that the destination leaves the current site without overriding the visitor’s navigation preference.

## Responsive Behavior

At desktop widths, the banner and body each use a horizontal layout. The directory body uses a flexible brand column and an auto-sized group of link columns.

At widths below `768px`, the banner stacks its text above the actions, the directory body becomes one column, and link columns wrap. Action links remain full-content buttons rather than collapsing to icon-only controls. The legal bar stacks copyright above site-specific legal content.

## Accessibility

The root remains a semantic `<footer>`. The directory links sit inside a `<nav aria-label="Footer navigation">`. CTA actions use descriptive visible labels, and the logo link has an accessible home label. Focus indicators follow the existing shared link and button treatment. Cyan banner text and controls use `--accent-contrast` so both supported themes preserve contrast.

## Theme Behavior

The banner uses `--accent` and `--accent-contrast`; the body uses `--bg`, `--text`, `--text-muted`, and `--border`. The component does not hard-code the dark palette. Slack and GitHub icon nodes inherit the action text color when the icon implementation supports `currentColor`.

## Tests

Component tests cover forwarding root attributes, rendering CTA actions with icons and destinations, rendering external indicators, omitting absent zones, preserving the max-width inner wrappers, and rendering generic legal content. CSS tests cover the Public Sans default, Martian Mono column labels, container alignment, responsive stacking, and semantic theme variables.

The brand-site test renders `App` and verifies the current-year copyright, the brand-only CC BY notice, and the labelled Slack and GitHub links. Existing site and package test suites must remain green, and the production site build must succeed.
