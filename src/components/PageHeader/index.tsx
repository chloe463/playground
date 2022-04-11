import React from "react";

type PageHeaderProps = {
  title: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <header className="relative px-6">
      <h2 className="font-heading text-heading1 font-bold">{title}</h2>
      {children}
    </header>
  );
};
