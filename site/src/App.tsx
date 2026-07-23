import { ToastProvider, Nav, Container, OpenWDLFooter } from "@openwdl/ui";
import { logoAssets } from "./data/brand";
import { Hero } from "./sections/Hero";
import { LogoConstruction } from "./sections/LogoConstruction";
import { LogoColor } from "./sections/LogoColor";
import { Typography } from "./sections/Typography";
import { ColorPalette } from "./sections/ColorPalette";
import { Grid } from "./sections/Grid";
import { Downloads } from "./sections/Downloads";

const NAV_LINKS = [
  { href: "#logo",       label: "Logo"      },
  { href: "#logo-color", label: "Color Use" },
  { href: "#typography", label: "Type"      },
  { href: "#colors",     label: "Palette"   },
  { href: "#grid",       label: "Grid"      },
  { href: "#downloads",  label: "Downloads" },
];

/**
 * Root application component — the single top-level entry point for the
 * OpenWDL brand-guidelines site.
 *
 * Composes every page section inside the shared library Nav, Container, and
 * Footer, wrapped by ToastProvider so copy confirmations surface anywhere in
 * the tree without prop-drilling.
 */
export default function App() {
  const fullLogo = logoAssets.find((a) => a.name === "Full Logo (Teal + White)")!;
  const logoImg = (height: number) => (
    <img src={fullLogo.svg} alt="OpenWDL" height={height} />
  );

  return (
    <ToastProvider>
      <Nav logo={logoImg(24)} logoHref="#top" links={NAV_LINKS} />
      <Container>
        <Hero />
        <LogoConstruction />
        <LogoColor />
        <Typography />
        <ColorPalette />
        <Grid />
        <Downloads />
      </Container>
      <OpenWDLFooter
        logo={logoImg(28)}
        legal={(
          <>
            Brand guidelines and assets licensed under{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
          </>
        )}
      />
    </ToastProvider>
  );
}
