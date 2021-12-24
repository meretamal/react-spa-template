import { combineReducers } from 'redux';
import baseApi from '@api/base.api';
import example from './example/example.slice';

export default combineReducers({
  example,
  [baseApi.reducerPath]: baseApi.reducer,
});
