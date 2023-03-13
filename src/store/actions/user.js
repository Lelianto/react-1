export const GET_USER = "GET_USER";
export const GET_REPO = "GET_REPO";

export const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});
