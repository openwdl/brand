# Homepage Code Monument Hero

## Purpose

The homepage hero presents WDL as a language that separates analysis from
infrastructure. It must make that idea understandable in the first viewport,
give developers a concrete view of WDL syntax, and direct new users toward
writing their first workflow.

The approved direction is **The Code Monument**. A real WDL source panel is the
hero's central product object. A restrained execution graph sits behind it as
supporting evidence that the source becomes runnable work. The design takes
inspiration from technically confident developer sites, including Tokio,
without reproducing their composition or visual language.

## Content

The eyebrow reads `The Workflow Description Language`.

The headline reads:

> Write once.
>
> Run anywhere.

The supporting sentence reads:

> Describe complex analysis in readable code while execution engines handle
> the infrastructure.

The primary action reads `Write your first workflow` and links to the existing
first-workflow documentation route. The secondary action reads `Read the spec`
and links to the WDL specification.

The source specimen is a short, valid `align_reads.wdl` workflow. It includes
an `Array[File]` input, a `scatter`, a `call`, and an `Array[File]` output so
the syntax demonstrates parallel work and collected outputs without requiring
domain knowledge. The specimen is illustrative content, not an interactive
editor.

The lower metadata line identifies WDL as an `Open standard`, names the current
stable language version, and states the supported execution range as
`Local · HPC · Cloud`.

## Desktop Composition

The hero begins immediately below the canonical `NavBar` and fills most of the
first viewport. The copy occupies the left side. The source specimen floats on
the right as a bordered, dark panel with a slight perspective rotation, soft
shadow, and restrained teal illumination. The panel remains readable and must
not resemble a screenshot or browser window.

The execution graph appears behind and below the source panel. Its lower
contrast keeps it subordinate to the source. Nodes correspond to the specimen:
one sample input, three scattered `align` calls, and a collected `BAMs` output.
The graph must remain semantically consistent with the displayed code.

The headline uses the existing display treatment and Public Sans rather than
turning the entire hero into monospace. Martian Mono remains reserved for the
eyebrow, source, metadata, and controls. This preserves hierarchy and keeps the
source panel visually distinct.

The existing teal, cool-gray, grid, spacing, radius, and motion tokens govern
the composition. The hero does not introduce a separate palette.

## Mobile Composition

Mobile keeps the headline, primary action, and source specimen in a single
vertical sequence. The source panel loses its perspective transform and spans
the content width. The specimen shortens without becoming invalid or
elliptical.

The execution graph disappears on narrow screens because it competes with the
source at that size. The source itself remains visible; replacing it with a
generic illustration would remove the central idea. Supporting copy may
shorten to `Readable workflow code. Infrastructure-independent execution.` if
the full sentence creates an avoidable third line group.

The primary action remains visible above the source panel. The secondary action
may move below the specimen or disappear from the first viewport, but it
remains available elsewhere on the page.

## Motion

Motion communicates execution without simulating a live engine. Graph edges
trace slowly through a moving dash pattern, and one small status point on the
source panel breathes at a low frequency. The source text, headline, and panel
do not type, flicker, float, or continuously tilt.

Motion begins without delaying readable content. It must not create layout
shift. Under `prefers-reduced-motion: reduce`, the graph and status point render
as complete static states.

## Themes and Accessibility

Dark mode uses the current near-black background, cool-gray borders, light
text, and teal execution accents. Light mode retains the same hierarchy and
becomes a drafting-table treatment: a light background, dark source panel or
high-contrast light source panel, visible structural grid, and theme-correct
semantic colors. Every color comes from shared theme variables so neither mode
depends on hard-coded dark assumptions.

The source specimen is exposed as code, not as an image. Decorative graph
geometry is hidden from assistive technology because the surrounding copy and
source already communicate its meaning. Buttons and links use existing focus,
hover, and reduced-motion behavior. Text and controls meet WCAG AA contrast.

The hero has one `h1`. The source panel receives an accessible label such as
`Example WDL workflow`; its filename and status are supplementary text rather
than the only label.

## Component Boundaries

`AboutPage` owns the hero's content and route destinations. A focused,
page-local hero component owns the composition. A page-local source specimen
component owns the valid WDL example and its semantic code markup. A decorative
execution graph component owns the SVG and receives no runtime data.

The implementation reuses `NavBar`, shared button or link facilities, theme
tokens, and existing syntax styles where they fit. It does not add a workflow
parser, execution simulation, animation library, canvas renderer, or new public
API to `@openwdl/ui`.

## Failure and Fallback Behavior

The hero has no network or runtime data dependency. If CSS animation is
unavailable, the final graph state remains visible. If advanced effects such as
`backdrop-filter`, masks, or perspective transforms are unsupported, the
source panel remains a flat, bordered code panel with the same content and
hierarchy.

## Verification

Component tests verify the headline, primary and secondary destinations,
semantic code region, filename, current WDL version metadata, and single `h1`.
The site test suite verifies the hero in both home routing and root-base builds.

Visual verification covers desktop and mobile widths in both themes, reduced
motion, keyboard focus, long-text wrapping, source readability, and absence of
horizontal overflow. Static-output checks confirm that the hero requires no
client-only data to render.

## Scope

This design replaces only the homepage hero. It does not rewrite the sections
below it, change WDL documentation content, alter global navigation, introduce
institutional logos, or turn the source specimen into an editor.
