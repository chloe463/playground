import { getCommentsMock } from "./comments";
import { getPostConnectionMock } from "./postConnection";
import { questionnaireMocks } from "./questionnaires";

export const handlers = [getCommentsMock, getPostConnectionMock, ...questionnaireMocks];
