import { ImageResponse } from "next/og";

export const alt = "Re2O Masters Summit 사전접수 현황";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ff6d6a",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 2,
            opacity: 0.85,
          }}
        >
          RE2O MASTERS SUMMIT
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24 }}>
          사전접수 현황
        </div>
        <div style={{ fontSize: 34, fontWeight: 600, marginTop: 40, opacity: 0.9 }}>
          2026.10.07 개최
        </div>
      </div>
    ),
    { ...size }
  );
}
