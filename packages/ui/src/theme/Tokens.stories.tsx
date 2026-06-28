import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "./tokens";

/** Renders a labeled color chip for a single token value. */
function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: tokens.font.mono, fontSize: 12 }}>
      <span style={{ width: 28, height: 28, borderRadius: 6, background: value, border: "1px solid var(--border)" }} />
      <code>{name}</code>
      <span style={{ color: "var(--text-muted)" }}>{value}</span>
    </div>
  );
}

/** Renders one named scale (teal or gray) as a column of swatches. */
function Scale({ title, scale }: { title: string; scale: Record<string, string> }) {
  return (
    <div>
      <h3 style={{ color: "var(--text)" }}>{title}</h3>
      <div style={{ display: "grid", gap: 6 }}>
        {Object.entries(scale).map(([k, v]) => <Swatch key={k} name={k} value={v} />)}
      </div>
    </div>
  );
}

/** Foundations showcase: primitive scales, semantic tokens, and the type scale. */
function Foundations() {
  const semantic = ["--bg", "--surface", "--border", "--text", "--text-muted", "--accent", "--accent-contrast"];
  return (
    <div style={{ display: "grid", gap: 32, padding: 24, background: "var(--bg)", color: "var(--text)" }}>
      <div style={{ display: "flex", gap: 48 }}>
        <Scale title="Teal" scale={tokens.color.teal} />
        <Scale title="Gray" scale={tokens.color.gray} />
      </div>
      <div>
        <h3>Semantic (re-themes with the toolbar toggle)</h3>
        <div style={{ display: "grid", gap: 6 }}>
          {semantic.map((v) => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: tokens.font.mono, fontSize: 12 }}>
              <span style={{ width: 28, height: 28, borderRadius: 6, background: `var(${v})`, border: "1px solid var(--border)" }} />
              <code>{v}</code>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Type scale</h3>
        <p style={{ fontFamily: tokens.font.sans }}>Public Sans — body text</p>
        <p style={{ fontFamily: tokens.font.mono }}>Martian Mono — code</p>
      </div>
    </div>
  );
}

const meta: Meta<typeof Foundations> = {
  title: "Foundations/Tokens",
  component: Foundations,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Foundations>;

/** The full foundations reference. */
export const All: Story = {};
