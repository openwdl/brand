# Release checklist

Use this checklist for releases of the OpenWDL site and UI package.

## Prepare

1. Confirm the release branch contains only approved changes and that required
   pull requests have passed CI.
2. Install the locked dependency set with `npm ci`.
3. Review user-facing changes, generated documentation, and deployment
   configuration for the intended release scope.

## Check the WDL version

1. Read the latest stable release from
   `https://github.com/openwdl/wdl/releases/latest`. Do not use a prerelease.
2. If the stable language version changed, update the WDL example in
   `site/src/not-found/NotFoundPage.tsx` and the current-version statement and
   final timeline milestone in `site/src/about/AboutPage.tsx`. Use the two-part
   language version in WDL source, e.g., `1.3`, and the three-part release tag
   in About prose, e.g., `1.3.0`.
3. Audit explicit WDL examples with:

   ```sh
   rg 'version [0-9]+\.[0-9]+' site/src/content/docs packages/ui/src
   ```

   Update examples that teach the current language. Keep historical examples
   pinned when their version is part of the explanation, especially in the
   upgrade guide.
4. Regenerate documentation through the normal site build. Do not edit
   `site/src/generated/docs.generated.ts` directly.

## Validate

Run the package checks:

```sh
npm run test --workspace @openwdl/ui
npm run lint --workspace @openwdl/ui
npm run test --workspace @openwdl/brand
npm run lint --workspace @openwdl/brand
```

Build and validate the root deployment:

```sh
npm run build --workspace @openwdl/brand
npm run test:static --workspace @openwdl/brand
```

## Publish and verify

1. Review the final diff and release notes before merging or publishing.
2. Confirm the Pages deployment completes successfully.
3. Check the home page, documentation, Get Started wizard, and an unknown URL
   on the deployed site.
4. Confirm the published 404 response preserves the attempted URL and returns
   HTTP status `404`.
