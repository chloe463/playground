import React from "react";
import { Link as RouterLink } from "react-router-dom";

export type Page = {
  name: string;
  url: string;
};

type Props = {
  pages: Page[];
};

export const SIDEBAR_WIDTH = 280;

export const SideBar: React.VFC<Props> = (props) => {
  return (
    <nav className="block w-[280px] mt-6">
      <RouterLink to={"/"} className="flex items-center py-4 px-8 no-underline">
        <div className="block w-9 h-9 bg-black-alpha500 rounded" />
        <h2 className="ml-4 text-heading2 text-black-alpha700 hover:text-black-alpha800">
          My sandbox
        </h2>
      </RouterLink>
      <ul className="mt-14">
        {props.pages.map((page) => {
          return (
            <li key={page.name}>
              <RouterLink
                to={page.url}
                className={`
                  flex items-center py-4 px-8 text-sugheading text-black-alpha500 no-underline uppercase
                  transition-all duration-200 ease-out
                  hover:text-black-alpha700 hover:no-underline
                  active:text-black-alpha700 active:no-underline
                  visited:text-black-alpha500 visited:no-underline
                `}
              >
                <div className="block w-6 h-6 rounded bg-black-alpha400 mr-4 transition-all duration-200 ease-out" />
                {page.name}
              </RouterLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
