import axios from 'axios';

export const SET_PRODUCT = 'SET_PRODUCT';

export function setProduct(data) {
  return {
    type: SET_PRODUCT,
    data: data
  };
}

export function getProduct() {
  return dispatch => {
    return axios
      .get('https://reqres.in/api/product', {})
      .then(response => {
        return dispatch(setProduct(response.data));
      })
      .catch(error => {
        console.log('shit happened', error);
        return null;
      });
  };
}
