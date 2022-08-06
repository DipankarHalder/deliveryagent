import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  authentication,
  getUserProfile,
  listOfProducts,
} from '../actions/coreActions';

export const CoreContext = createContext();
export const CoreProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  /*
   *  @authentication
   *  with params (email/username and password)
   */
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const authLogin = payload => {
    setIsLoading(true);
    authentication(payload)
      .then(res => {
        if (res.data.status === 1) {
          console.log(res.data);
          AsyncStorage.setItem('AccessToken', res.data.token);
          AsyncStorage.setItem(
            'UserInformation',
            JSON.stringify(res.data.data),
          );
          setUserToken(res.data.token);
          setUserInfo(res.data.data);
          setIsLoading(false);
        }
      })
      .catch(err => console.log(err));
  };

  /*
   *  @signout/logout
   */
  const authLogout = () => {
    setUserToken(null);
    setUserInfo(null);
    AsyncStorage.removeItem('AccessToken');
  };

  /*
   *  @check isAuthentication
   *  using Asyncstorage accessToken
   */
  const isAuthentication = async () => {
    // AsyncStorage.clear();
    try {
      setIsLoading(true);
      let userTokenInfo = await AsyncStorage.getItem('AccessToken');
      let userItemInfo = await AsyncStorage.getItem('UserInformation');
      let userInformation = JSON.parse(userItemInfo);

      if (userInformation) {
        setUserToken(userTokenInfo);
        setUserInfo(userItemInfo);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  /*
   *  @get loggedIn user information
   *  using get api
   */
  const [userProfile, setUserProfile] = useState(null);
  const getUserProfileInformation = () => {
    getUserProfile()
      .then(res => {
        console.log(res.data);
        setUserProfile(res.data);
      })
      .catch(err => console.log(err));
  };

  /*
   *  @get all products
   *  using post api
   */
  const [userProdList, setUserProdList] = useState(null);
  const getAllProductList = useCallback(payload => {
    listOfProducts(payload)
      .then(res => {
        console.log(res.data);
        setUserProdList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    isAuthentication();
  }, []);

  useEffect(() => {
    getUserProfileInformation();
  }, []);

  return (
    <CoreContext.Provider
      value={{
        isLoading,
        userToken,
        userInfo,
        userProfile,
        userProdList,
        authLogin,
        authLogout,
        getAllProductList,
      }}>
      {children}
    </CoreContext.Provider>
  );
};
