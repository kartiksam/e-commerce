let productdata = [];
//get data in array also
//state=current state
export const getProductReducer = (state = productdata, action) => {
  switch (action.type) {
    case "SUCCCESS_GET_PRODUCTS":
      return { productdata: action.payload };
    case "FAIL_GET_PRODUCTS":
      return { productdata: action.payload };
    default:
      return state;
  }
};
