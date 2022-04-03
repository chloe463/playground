import { getPathNameAndQueryFromAsPath } from "./getPathNameAndQueryFromAsPath";

describe("getPathNameAndQueryFromAsPath", () => {
  it("should split pathname", () => {
    const { pathname, query } = getPathNameAndQueryFromAsPath("/path/to/some/page");
    expect(pathname).toBe("/path/to/some/page");
    expect(query.entries.length).toBe(0);
  });

  it("should split pathname and search params", () => {
    const { pathname, query } = getPathNameAndQueryFromAsPath("/path/to/some/page?foo=bar");
    expect(pathname).toBe("/path/to/some/page");
    expect(query.get("foo")).toBe("bar");
  });
});
