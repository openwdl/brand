import { ToastProvider } from "./components/ToastProvider";
import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { LogoConstruction } from "./sections/LogoConstruction";
import { LogoColor } from "./sections/LogoColor";
import { Typography } from "./sections/Typography";
import { ColorPalette } from "./sections/ColorPalette";
import { Grid } from "./sections/Grid";
import { Downloads } from "./sections/Downloads";
import { Footer } from "./sections/Footer";

/**
 * Root application component, the single top-level entry point for the
 * OpenWDL brand-guidelines single-page site.
 *
 * Composes every page section in canonical order inside a shared container,
 * wrapped by the sticky `Nav` and the global `ToastProvider` so copy
 * confirmations surface anywhere in the tree without prop-drilling.
 */
export default function App() {
  return (
    <ToastProvider>
      <Nav />
      {/* All sections share one centred container for consistent gutter spacing. */}
      <div className="container">
        <Hero />
        <LogoConstruction />
        <LogoColor />
        <Typography />
        <ColorPalette />
        <Grid />
        <Downloads />
        <Footer />
      </div>
    </ToastProvider>
  );
}
