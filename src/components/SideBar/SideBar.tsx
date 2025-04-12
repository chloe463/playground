import classnames from "classnames";
import Link from "next/link";
import React from "react";

export type Page = {
  name: string;
  url: string;
};

type Props = {
  currentPathName: string;
};

export const SIDEBAR_WIDTH = 280;

const PAGES: Page[] = [
  // {
  //   name: "home",
  //   url: "/",
  // },
  {
    name: "layoutAnimation",
    url: "/layout-animation",
  },
  {
    name: "virtualizedList",
    url: "/virtualized-list",
  },
  {
    name: "questionnaires",
    url: "/questionnaires",
  },
];

export const SideBar: React.FC<Props> = (props) => {
  return (
    <nav className="mt-6 block w-[280px]">
      <Link href="/" className="flex items-center px-8 py-4 no-underline">
        <div className="block size-9 rounded bg-black-alpha500" />
        <h2 className="ml-4 text-heading2 text-black-alpha700 hover:text-black-alpha800">
          My sandbox
        </h2>
      </Link>
      <ul className="mt-14">
        {PAGES.map((page) => {
          return (
            <li key={page.name}>
              <Link
                href={page.url}
                className={classnames(
                  `
                    flex items-center px-8 py-4 text-subheading uppercase no-underline
                    transition-all duration-200 ease-out
                    visited:text-black-alpha500 visited:no-underline
                    hover:text-black-alpha700 hover:no-underline
                    active:text-black-alpha700 active:no-underline
                  `,
                  {
                    "text-black-alpha800": props.currentPathName.startsWith(page.url),
                    "text-black-alpha500": !props.currentPathName.startsWith(page.url),
                  }
                )}
              >
                <div
                  className={classnames(
                    "mr-4 block size-6 rounded transition-all duration-200 ease-out",
                    {
                      "bg-black-alpha500": props.currentPathName.startsWith(page.url),
                      "bg-black-alpha400": !props.currentPathName.startsWith(page.url),
                    }
                  )}
                />
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
