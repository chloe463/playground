import type { ReactNode } from "react";
import { SIDEBAR_WIDTH, SideBar } from "../../components/SideBar";
import { appBaseStyle } from "../../components/layout";

export default function QuestionnaireAppLayout({ children }: { children: ReactNode }) {
  const pathname = "/foo";
  return (
    <div className="flex">
      <div className="sticky top-0 block h-screen w-[280px]">
        <SideBar currentPathName={pathname} />
      </div>
      <div
        className={`elevation4 block shrink`}
        style={{ width: `calc(100vw - ${SIDEBAR_WIDTH}px)` }}
      >
        <main className={`mt-32 ${appBaseStyle}`} key={pathname}>
          {children}
        </main>
      </div>
    </div>
  );
}
