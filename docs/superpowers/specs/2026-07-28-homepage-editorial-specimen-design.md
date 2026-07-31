# Homepage Editorial Specimen

## Purpose

The homepage introduces WDL as a technical standard, not as a product campaign. It keeps the existing code-to-execution idea because that relationship explains the language clearly, but presents it as a compact reference specimen rather than a dramatic hero.

The page reads like the front matter of a language guide: factual, specific, and useful before it asks the reader to take an action.

## Content

The eyebrow reads `Workflow Description Language`.

The heading reads:

> Describe workflows independently of the system that runs them.

The heading uses an intentional break after `independently` so it remains two lines across practical viewport widths. Its type scales down on narrow phones rather than introducing a third line.

The supporting paragraph defines WDL without promotional claims:

> WDL is an open language for expressing tasks, data, dependencies, and runtime requirements. The same description can be interpreted by different execution engines.

Two restrained call-to-action buttons follow the introduction. `Read the language guide` links to `/docs/learn/overview/` and uses the accent-filled primary treatment. `WDL 1.3 specification` links to `https://github.com/openwdl/wdl/blob/wdl-1.3/SPEC.md` and uses an outlined secondary treatment. Both actions share a compact height, use quiet hover and focus states without glow or lift, and wrap as a group on narrow screens.

The code specimen presents a generic `workflow.wdl` rather than a domain-specific pipeline. It imports a reusable step, accepts `Array[File] inputs`, scatters `steps.process` across each `File`, and exposes the collected `Array[File] results`. The adjacent graph depicts the same fan-out and fan-in relationship as `inputs → process ×3 → results`. Small `scatter` and `gather` annotations identify those transitions; `gather` describes WDL's implicit collection of scattered call outputs rather than a nonexistent language keyword.

The graph pane contains a quiet `Local · HPC · Cloud` footer to show that the same workflow description can target different execution environments. No metadata strip sits below the specimen.

## Composition

The opening section stays within the site's normal `75rem` content width. A centered `42.5rem` introduction sits above the wider specimen, with the definition constrained to `36.25rem` for a balanced reading measure. The specimen retains the full section bounds, including on ultrawide screens.

The source and execution graph occupy two equal, aligned panes within one bordered frame. Each pane has a small factual label: `workflow.wdl` and `Execution structure`. The source panel does not tilt, float, overlap the graph, or use a dark window treatment that differs from the active theme.

The scatter/gather graph is centered horizontally and vertically in the space above its execution-target footer. It has the same visual weight as the source and remains legible without becoming an illustration behind another element. A faint structural grid remains within the content-width section bounds, but radial glow, perspective, pronounced shadow, and simulated status indicators are removed.

## Interaction and Motion

The introduction uses primary and secondary CTA links with restrained hover and focus-visible behavior. The specimen itself is not interactive.

Slow edge tracing remains as the only motion cue because it explains the relationship between workflow description and execution. The trace traverses the complete fan-out and fan-in topology without implying per-node execution status. The code, panels, nodes, and background remain static. Under `prefers-reduced-motion: reduce`, the graph renders as a complete static state.

## Responsive Behavior

Desktop presents the source and graph side by side. Narrow screens stack the source above the same graph topology within the bordered specimen. The graph remains visible because it reinforces the source's scatter and collected-output behavior.

`ExecutionGraph` uses one compact horizontal topology with a `360 × 180` view box at every breakpoint. The SVG fills its available graph-body width while preserving its aspect ratio and centering the `inputs`, three `process` nodes, and `results` node within the view box. The layout must not introduce horizontal scrolling. The in-pane execution targets wrap in their existing reading order.

## Themes and Accessibility

Both panes use shared theme surfaces, structural borders, text colors, and accent colors. Light mode resembles a technical document rather than a dark terminal embedded in a white page. Dark mode avoids glow and excessive contrast between the specimen and its surroundings.

The page contains one `h1`. The source remains semantic code inside a labelled region and communicates the same scatter and collected-output relationship as the graph, so the graph introduces no information available only visually. The graph remains decorative, and assistive technology does not need to traverse its SVG geometry.

Links meet WCAG AA contrast and retain visible keyboard focus. The layout respects user motion preferences and remains readable at text zoom.

## Component Boundaries

`HomeHero` continues to own the homepage introduction and specimen composition. `WorkflowSource` owns the valid WDL markup. `ExecutionGraph` owns the semantically matching decorative SVG. No runtime data, workflow parser, animation library, canvas renderer, or new public `@openwdl/ui` API is introduced. The component remains page-local and reuses the current route helpers, shared theme tokens, and navigation.

## Verification

Component tests verify the factual heading and definition, both exact link labels and destinations, semantic code region, in-pane execution targets, absence of a metadata strip below the specimen, and the single `h1`. A source-level regression test preserves the generic `inputs → process ×3 → results` topology, its `scatter` and `gather` annotations, and the graph's centered alignment.

The implementation replaces the superseded `AboutPage.test.tsx` expectations for `Write once. Run anywhere.`, `Write your first workflow`, `Read the spec`, and `WDL 1.3`. It also replaces the `HomeHero.module.css.test.ts` assertions for viewport-height padding, perspective transforms, hidden short-viewport graphs, and the ultrawide execution rail.

Responsive checks cover side-by-side desktop panes, stacked mobile panes, the single fluid graph topology, graph visibility, and absence of horizontal overflow. Theme checks cover light and dark contrast. Reduced-motion checks confirm that the explanatory graph remains complete without animation.

## Scope

This design replaces only the homepage introduction and code-to-execution specimen. It does not rewrite sections below the fold, change global navigation, add implementation logos, create an interactive editor, or alter documentation content.
