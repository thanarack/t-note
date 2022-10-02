import cookie from 'cookiejs';
import { AppDispatch } from '../../store';
import { IAuth, userLogin } from '../../store/reducers/authReducer';

/**
 * It's a function that takes a dispatch function and a payload of type IAuth and returns a dispatch
 * function that takes a payload of type IAuth
 * @param {AppDispatch} dispatch - AppDispatch - this is the dispatch function that is passed to the
 * action creator by the redux-thunk middleware.
 * @param {IAuth} payload - IAuth - this is the payload that will be passed to the reducer.
 */
const userLoginAction = (dispatch: AppDispatch, payload: IAuth) => {
  cookie.set('note-user-auth', String(payload.isAuth))
  dispatch(userLogin(payload));
};

export { userLoginAction };
