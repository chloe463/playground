import { SIDEBAR_WIDTH, SideBar } from "../../components/SideBar";
import { appBaseStyle } from "../../components/layout";

export const metadata = {
  title: "Questionnaires App",
};

export default function QuestionnaireAppLayout({ children }: { children: React.ReactNode }) {
  const pathname = "/foo";
  return (
    <div className="flex">
      <div className="block sticky top-0 w-[280px] h-screen">
        <SideBar currentPathName={pathname} />
      </div>
      <div
        className={`block flex-shrink elevation4`}
        style={{ width: `calc(100vw - ${SIDEBAR_WIDTH}px)` }}
      >
        <main className={`mt-32 ${appBaseStyle}`} key={pathname}>
          {children}
        </main>
      </div>
    </div>
  );
}
