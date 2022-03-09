export const getPathNameAndQueryFromAsPath = (asPath: string) => {
  const [pathname, query] = asPath.split("?");
  return {
    pathname,
    query: new URLSearchParams(query),
  };
};
