import { combineReducers } from 'redux';
import baseApi from '@api/base.api';
import example from './example/example.slice';
import theme from './theme/theme.slice';

export default combineReducers({
  example,
  theme,
  [baseApi.reducerPath]: baseApi.reducer,
});
