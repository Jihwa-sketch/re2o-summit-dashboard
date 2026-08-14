import { NextResponse } from "next/server";
import { getSummitStats } from "@/lib/summit";

// Apps Script 리다이렉트가 가끔 느려서(로컬에서 13초대 관측) 기본 10초 제한보다 여유를 둔다.
export const maxDuration = 30;

export async function GET() {
  try {
    const stats = await getSummitStats();
    return NextResponse.json(stats);
  } catch (err) {
    console.error("[dashboard] 집계 실패:", err);
    return NextResponse.json(
      {
        error: "데이터를 불러오지 못했어요. 잠시 후 다시 시도해주세요.",
        // 디버깅용 — 원인 파악되면 제거 예정. 민감 정보는 없음(URL 설정 여부/HTTP 상태 정도).
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 502 }
    );
  }
}
