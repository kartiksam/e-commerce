//here we do actions need get method to get data cant't dfeals with props and in case of context in notestate define mnethod similar and then export notecontext.providr with vlaue that want  to export and in there usecontext hook with notecontyect and then destructur evalues from that and use and statse upadate auto
// here we use asyncronou call then need to use redux thunk middleware that's why sytax differs
//here direwctly export if not here the below module.exports =getproduct
// in any component we want data what we do call this method and we get data  dispatch and pass in productreducer method auto by dispatch
export const getProduct = () => async (dispatch) => {
  try {
    const response = await fetch("/getproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
    dispatch({ type: "SUCCCESS_GET_PRODUCTS", payload: json });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};
