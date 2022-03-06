import React from "react";

type PageHeaderProps = {
  title: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <header className="relative pr-6 pl-6">
      <h2 className="text-heading1 font-bold font-heading">{title}</h2>
      {children}
    </header>
  );
};
