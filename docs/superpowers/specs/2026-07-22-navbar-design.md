# Canonical OpenWDL Navbar Design

## Purpose

The canonical navbar helps newcomers understand WDL and reach the quickstart. Every OpenWDL site uses the same shallow, single-row navigation so movement between `openwdl.org`, `docs.openwdl.org`, and project resources feels like one ecosystem.

## Content Hierarchy

The desktop navbar presents these destinations in order:

1. The OpenWDL wordmark links to `https://openwdl.org`.
2. `About` links to `https://openwdl.org/about`.
3. `Docs` links to `https://docs.openwdl.org`.
4. `Specification` links to `https://openwdl.org/spec`.
5. `Blog` links to `https://openwdl.org/blog/`.
6. A GitHub logo link with the accessible label `OpenWDL on GitHub` links to `https://github.com/openwdl`.
7. The primary `Get started` action links to `https://docs.openwdl.org/getting-started/quickstart.html`.

The navbar excludes governance, Slack, implementations, individual repositories, brand assets, contact details, licensing, and page-section anchors. Those destinations belong in page content or the canonical footer. The navbar does not add search until OpenWDL has a cross-site search experience.

## Visual Structure

The navbar background, bottom border, sticky positioning, and frosted backdrop span the viewport. An inner wrapper uses `max-width: var(--maxw)`, `margin-inline: auto`, and `padding-inline: var(--space)` so its content aligns with `Container` and `OpenWDLFooter`.

The wordmark anchors the left side. The four text links form the primary discovery sequence. A subtle divider separates discovery links from the GitHub icon and cyan `Get started` action. Public Sans carries all labels; the navbar does not use Martian Mono.

OpenWDL-owned destinations do not show external-link arrows or force new tabs. Although the links cross domains, users should experience them as one OpenWDL property.

## Component Contract

The existing `Nav` remains the content-agnostic layout primitive. A new `OpenWDLNav` export composes it with canonical destinations, the GitHub icon from the package’s local `react-icons` dependency, and the `Get started` action.

Each consuming site supplies its OpenWDL logo node. `OpenWDLNav` accepts native header attributes and an optional `active` value of `about`, `docs`, `specification`, or `blog`. The active destination receives `aria-current="page"` and the active visual treatment. Sites without a matching global destination, e.g., the brand site, omit `active`.

`Nav` supports three content groups: primary links, utility actions, and a primary action. The component forwards its ref and native header attributes. It renders semantic `<nav aria-label="Primary navigation">` content and preserves the full-width sticky treatment.

## Mobile Behavior

Below `768px`, the wordmark and compact `Get started` action remain visible. A labelled menu button replaces the text links and GitHub icon. Activating the button opens a panel below the header containing `About`, `Docs`, `Specification`, `Blog`, and `OpenWDL on GitHub`.

The menu button exposes `aria-expanded` and `aria-controls`. The menu closes when the user selects a destination, presses `Escape`, or moves focus outside the open menu. Closing the menu returns focus to the menu button when the user pressed `Escape`. The menu does not trap focus.

## Accessibility

The wordmark link has the accessible label `OpenWDL home`. The GitHub logo is decorative within a link labelled `OpenWDL on GitHub`. The current global destination uses `aria-current="page"`. Visible keyboard focus uses the existing accent treatment and remains distinguishable on the frosted dark background.

The mobile menu button includes visible or screen-reader text identifying it as `Open navigation`. Its expanded state and controlled panel are programmatically associated. All menu destinations remain normal links, preserving browser navigation behavior.

## Theme Behavior

The navbar uses `--bg`, `--border`, `--text`, `--text-muted`, `--accent`, and `--accent-contrast`. The frosted background uses `color-mix()` over `--bg`, so it follows light and dark themes. The GitHub icon inherits `currentColor`.

## Tests

`Nav` tests cover ref and native attribute forwarding, max-width alignment, semantic labels, primary action rendering, and mobile menu state. Interaction tests cover opening and closing the menu, `Escape` behavior, focus restoration, destination selection, and `aria-expanded`.

`OpenWDLNav` tests verify every canonical destination and URL, the GitHub icon’s accessible label, the quickstart action, and `aria-current`. The brand-site `App` test verifies that the canonical global destinations replace the previous page-section links. Existing package and site suites must remain green, and the production site and Storybook builds must succeed.
