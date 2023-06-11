import { Lato, Poppins } from "next/font/google";
import { StyledComponentsRegistry } from "./StyledComponentsRegistry";

import "../index.css";
export const metadata = {
  title: "My Playground App",
};

const poppins = Poppins({
  subsets: [],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const lato = Lato({
  subsets: [],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
