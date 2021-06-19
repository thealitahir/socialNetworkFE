import * as types from './types';
import Api from '../lib/requests/api';
import Storage from '../lib/requests/storage';

function setIsLoading(isLoading) {
  return {
    type: types.IS_LOADING,
    isLoading,
  };
}

export function login(params, navigate, setData) {
  return (dispatch) => {
    dispatch(setLoginLoading(true));

    Api.post('user/login', params)
      .then((resp) => {
        // Storage.storeData("currentUser", resp.user)
        Storage.storeData('access_token', resp.token);
        // Storage.storeData('userDetails', resp.data);
        dispatch(setLoginType('login'));

        dispatch(setLoginLoading(false));

        setData();
        dispatch(getUser());

        navigate('Tabs');
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Login Successfully',
          visibilityTime: 1000,
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
          visibilityTime: 1000,
        });
        setData();
        // dispatch(setForgotValidationError(err.errors));
        dispatch(setLoginLoading(false));
      });
  };
}

export function signUp(params, navigate, setData) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    Api.post('user/signup', params)
      .then((resp) => {
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Account Created Sign In To Continue',
          visibilityTime: 2000,
        });
        setData();
        navigate('SignIn');

        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(setIsLoading(false));

        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.err.message.message ? err.err.message.message : err.err.message,
          visibilityTime: 2000,
        });
        // dispatch(setForgotValidationError(err.errors));
        dispatch(setIsLoading(false));
      });
  };
}
