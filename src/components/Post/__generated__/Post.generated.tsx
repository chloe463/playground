import * as Types from "../../../__generated__/types";

import { gql } from "@apollo/client";
export type PostFragment = { __typename?: "Post" } & Pick<
  Types.Post,
  "id" | "userId" | "title" | "body"
>;

export const PostFragmentDoc = gql`
  fragment Post on Post {
    id
    userId
    title
    body
  }
`;
