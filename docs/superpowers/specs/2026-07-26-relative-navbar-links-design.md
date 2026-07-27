# Base-aware navbar links

## Goal

The OpenWDL navbar keeps internal navigation within the site's configured deployment base. A preview served from `/brand/` links to `/brand/about/`, while production served from `/` links to `/about/`.

## Component contract

`OpenWDLNav` accepts a `baseHref` prop. The component normalizes the value to one trailing slash and prefixes it to the Home, About, Community, Docs, Blog, and Get started destinations. The site passes `import.meta.env.BASE_URL` at every `OpenWDLNav` call site.

Spec and GitHub remain absolute external links because they leave the site. Active-link behavior and accessible labels do not change.

## Testing

Component tests verify internal destinations under both `/` and `/brand/`, external destinations remain absolute, and active links retain `aria-current="page"`. Existing site tests verify each page continues to render its navbar.
