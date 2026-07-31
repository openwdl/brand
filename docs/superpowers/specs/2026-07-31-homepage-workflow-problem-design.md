# Homepage Workflow Problem Section

## Purpose

The section immediately after the homepage hero helps readers recognize when an
analysis has outgrown the scripts that started it. It diagnoses the problem
without repeating the hero's claims or introducing WDL as the solution; the
following section explains the WDL approach.

The framing treats scripts as a reasonable starting point rather than a mistake.
It speaks to technical newcomers and scientists who have seen an analysis become
difficult to understand, hand off, scale, or move.

## Content

The eyebrow reads `The problem`.

The heading reads:

> An analysis often outgrows the scripts that started it.

The supporting paragraph reads:

> Scripts are a natural place to begin. As an analysis grows, its dependencies,
> data flow, parallel work, and resource needs become harder to see, while the
> details needed to run it spread across scripts, inputs, and platform
> configuration.

Four parallel problem statements follow:

1. `Hard to understand`

   > Dependencies and data flow are implied by command order, filenames, and
   > local conventions.

2. `Hard to hand off`

   > The next person needs assumptions and context that the scripts do not carry
   > with them.

3. `Hard to scale`

   > More inputs require custom loops, batching, and bookkeeping around each
   > step.

4. `Hard to move`

   > Paths, queues, and installed software tie the analysis to one environment.

The four statements remain distinct. Understanding concerns reconstructing the
workflow's structure. Handoff concerns transferring the context needed to take
ownership. Scale concerns coordinating more inputs. Movement concerns
environment-specific assumptions.

## Technical Boundaries

The section does not imply that a WDL document contains every artifact needed
for execution. The workflow description expresses tasks, typed inputs and
outputs, dependencies, data flow, scatter and conditional structure, runtime
requirements, and optional containers. Concrete run values and files remain
separate, e.g., in `inputs.json`. Engine and platform behavior remains in
engine-specific configuration, e.g., `sprocket.toml`.

The copy does not claim that WDL alone guarantees reproducibility, provenance,
retry behavior, exact software versions, or universal portability. It describes
problems that arise when workflow structure and execution assumptions remain
implicit or distributed.

## Presentation

The section retains its current hierarchy: eyebrow, `h2`, supporting paragraph,
and four semantic `article` cards. The familiar structure keeps the section
simple and lets the revised content carry the change.

Each card retains the quiet theme surface and structural border already used by
the page. A thin accent-colored top edge adds hierarchy without introducing
icons, numbering, illustrations, animation, or another technical specimen.
Headings and descriptions remain left-aligned.

Desktop presents four equal columns. Intermediate widths use two columns, and
narrow screens use one column. Cards retain consistent internal spacing and
natural height rather than forcing equal text baselines at the cost of readable
wrapping.

## Accessibility

The section uses one labelled `section`, one `h2`, and four `article` elements
with `h3` headings. The accent edge is decorative and carries no information
that the text does not provide. Theme tokens preserve contrast in light and dark
modes, and no motion is introduced.

## Verification

Component tests verify the exact eyebrow, heading, paragraph, and four problem
statements. They also verify that the section contains four semantic articles
under the expected heading hierarchy.

CSS tests preserve the four-column desktop grid, two-column intermediate grid,
single-column mobile layout, quiet card surface, structural border, and thin
accent top edge.

## Scope

This design changes only the workflow-problem section immediately after the
homepage hero. It does not change the hero, the following WDL-approach section,
run-input documentation, engine configuration documentation, or sections about
OpenWDL's history and governance.
