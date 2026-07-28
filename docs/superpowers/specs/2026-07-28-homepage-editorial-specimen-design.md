# Homepage Editorial Specimen

## Purpose

The homepage introduces WDL as a technical standard, not as a product campaign. It keeps the existing code-to-execution idea because that relationship explains the language clearly, but presents it as a compact reference specimen rather than a dramatic hero.

The page reads like the front matter of a language guide: factual, specific, and useful before it asks the reader to take an action.

## Content

The eyebrow reads `Workflow Description Language`.

The heading reads:

> Describe workflows independently of the system that runs them.

The supporting paragraph defines WDL without promotional claims:

> WDL is an open language for expressing tasks, data, dependencies, and runtime requirements. The same description can be interpreted by different execution engines.

Two inline links follow the introduction. `Read the language guide` links to `/docs/learn/overview/`. `WDL 1.3 specification` links to `https://github.com/openwdl/wdl/blob/wdl-1.3/SPEC.md`. These links use normal text-link hierarchy rather than filled or outlined campaign buttons.

The code specimen remains a short, valid `align_reads.wdl` workflow. It includes a typed collection input, a `scatter`, an `align` call, and a collected `Array[File]` output. The adjacent graph depicts the same input, scattered calls, and output. All three `align` nodes connect to `BAMs` with equal, neutral edges; the graph does not distinguish live, completed, or queued work.

The metadata line reads `Open standard`, `Current version 1.3`, and `Local · HPC · Cloud`. It provides reference facts without behaving like a trust or sales strip.

## Composition

The introduction and specimen sit within the site's normal content width. The section no longer fills the viewport or relies on an oversized display headline. A moderate heading and a short paragraph establish the subject, followed immediately by the technical artifact.

The source and execution graph occupy two equal, aligned panes within one bordered frame. Each pane has a small factual label: `align_reads.wdl` and `Execution structure`. The source panel does not tilt, float, overlap the graph, or use a dark window treatment that differs from the active theme.

The graph has the same visual weight as the source. It remains legible without becoming an illustration behind another element. A faint structural grid remains within the content-width section bounds, but radial glow, perspective, pronounced shadow, and simulated status indicators are removed.

The metadata line sits below the specimen with a quiet top rule. It aligns with the specimen rather than spanning the viewport.

## Interaction and Motion

The introduction uses inline links with the site's existing hover and focus-visible behavior. The specimen itself is not interactive.

Slow edge tracing remains as the only motion cue because it explains the relationship between workflow description and execution. The trace traverses all equivalent graph edges without implying per-node execution status. The code, panels, nodes, and background remain static. Under `prefers-reduced-motion: reduce`, the graph renders as a complete static state.

## Responsive Behavior

Desktop presents the source and graph side by side. Narrow screens stack the source above the same graph topology within the bordered specimen. The graph remains visible because it reinforces the source's scatter-and-collect structure.

`ExecutionGraph` uses one compact horizontal topology with a `360 × 180` view box at every breakpoint. The SVG fills its pane width while preserving its aspect ratio, which keeps labels legible at a `320px` viewport without maintaining separate desktop and mobile diagrams. It preserves the relationship among `samples`, the three scattered `align` calls, and `BAMs`. The layout must not introduce horizontal scrolling. Metadata wraps in its existing reading order.

## Themes and Accessibility

Both panes use shared theme surfaces, structural borders, text colors, and accent colors. Light mode resembles a technical document rather than a dark terminal embedded in a white page. Dark mode avoids glow and excessive contrast between the specimen and its surroundings.

The page contains one `h1`. The source remains semantic code inside a labelled region. The definition and source explicitly communicate that `scatter` applies one call to each input and collects the outputs, so the graph introduces no information available only visually. The graph remains decorative, and assistive technology does not need to traverse its SVG geometry.

Links meet WCAG AA contrast and retain visible keyboard focus. The layout respects user motion preferences and remains readable at text zoom.

## Component Boundaries

`HomeHero` continues to own the homepage introduction and specimen composition. `WorkflowSource` owns the valid WDL markup. `ExecutionGraph` owns the semantically matching decorative SVG. No runtime data, workflow parser, animation library, canvas renderer, or new public `@openwdl/ui` API is introduced. The component remains page-local and reuses the current route helpers, shared theme tokens, and navigation.

## Verification

Component tests verify the factual heading and definition, both exact link labels and destinations, semantic code region, metadata strings `Open standard`, `Current version 1.3`, and `Local · HPC · Cloud`, and the single `h1`. A source-level regression test preserves three equivalent output connections from the scattered `align` nodes to `BAMs`.

The implementation replaces the superseded `AboutPage.test.tsx` expectations for `Write once. Run anywhere.`, `Write your first workflow`, `Read the spec`, and `WDL 1.3`. It also replaces the `HomeHero.module.css.test.ts` assertions for viewport-height padding, perspective transforms, hidden short-viewport graphs, and the ultrawide execution rail.

Responsive checks cover side-by-side desktop panes, stacked mobile panes, the single fluid graph topology, graph visibility, and absence of horizontal overflow. Theme checks cover light and dark contrast. Reduced-motion checks confirm that the explanatory graph remains complete without animation.

## Scope

This design replaces only the homepage introduction and code-to-execution specimen. It does not rewrite sections below the fold, change global navigation, add implementation logos, create an interactive editor, or alter documentation content.
