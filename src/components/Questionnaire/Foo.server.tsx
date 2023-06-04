// "use server";
import React from "react";

interface Props {

};

export const Foo: React.FC<Props> = (props) => {
  const serverAction = async (data: FormData) => {
    "use server";
    console.log(data.get("foo"));
  }

  return (
    <form action={serverAction}>
      <input type="hidden" name="foo" value="abc"/>
      <button type="submit">submit</button>
    </form>
  );
}
