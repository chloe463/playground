import React from "react";

type PageHeaderProps = {
  title: string;
};
type Props = React.PropsWithChildren<PageHeaderProps>

export const PageHeader: React.FC<Props> = ({ title, children }) => {
  return (
    <header className="relative px-6">
      <h2 className="font-heading text-heading1 font-bold">{title}</h2>
      {children}
    </header>
  );
};
