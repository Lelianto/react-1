export const GET_SHOW_PRODUCT = "GET_SHOW_PRODUCT";

export const getIsProductShow = (show) => ({
  type: GET_SHOW_PRODUCT,
  payload: show,
});
