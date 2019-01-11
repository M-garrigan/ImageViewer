import { thumbnailReducer } from './thumbnailReducer';

test("does 'HANDLE_MAGNIFY_UP' toggle a boolean", () => {
  expect({ ...thumbnailReducer(undefined, 'HANDLE_MAGNIFY_UP')}.isElemMagnified).toBe(true)
});