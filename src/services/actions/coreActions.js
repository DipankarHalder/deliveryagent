import { ServicesManager, accessBasedToken } from '../config';

/* constructed api header config */
const constructheader = token => {
  const headers = {
    'content-type': 'application/json',
    Accept: 'application/json',
    Authorization: token,
  };
  return headers;
};

/* authentication */
export const authentication = async payload => {
  try {
    const result = await ServicesManager('/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: payload,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

/* get user profile */
export const getUserProfile = async () => {
  const userToken = await accessBasedToken();
  try {
    const result = await ServicesManager('/auth/profile', {
      method: 'GET',
      headers: constructheader(userToken),
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

/* porduct list */
export const listOfProducts = async payload => {
  const userToken = await accessBasedToken();
  try {
    const result = await ServicesManager('/order/list', {
      method: 'POST',
      headers: constructheader(userToken),
      data: payload,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
