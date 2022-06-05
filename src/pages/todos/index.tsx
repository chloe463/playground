import Link from "next/link";
import React from "react";
import { appBaseStyle } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";

type Props = {};

const PAGES = [
  {
    url: "/apollo-inmemory-cache",
    label: "Apollo InMemory Cache",
  },
];

const Component: React.VFC<Props> = () => {
  return (
    <div className={appBaseStyle}>
      <PageHeader title={"Todo list"} />
      <div className="block px-6 mt-4">
        <ul>
          {PAGES.map((page) => {
            return (
              <li key={page.url}>
                <Link href={`/todos/${page.url}`}>
                  <a className="text-heading3 text-black-alpha800 hover:text-black-alpha500 hover:underline">
                    {page.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Component;
