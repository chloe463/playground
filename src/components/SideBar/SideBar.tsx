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

export const SideBar: React.VFC<Props> = (props) => {
  return (
    <nav className="block mt-6 w-[280px]">
      <Link href="/" className="flex items-center py-4 px-8 no-underline">

        <div className="block w-9 h-9 bg-black-alpha500 rounded" />
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
                    flex items-center py-4 px-8 text-subheading visited:text-black-alpha500 hover:text-black-alpha700
                    active:text-black-alpha700 no-underline visited:no-underline
                    hover:no-underline active:no-underline
                    uppercase transition-all
                    duration-200 ease-out
                  `,
                  {
                    "text-black-alpha800": props.currentPathName.startsWith(page.url),
                    "text-black-alpha500": !props.currentPathName.startsWith(page.url),
                  }
                )}>

                <div
                  className={classnames(
                    "block mr-4 w-6 h-6 rounded transition-all duration-200 ease-out",
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
