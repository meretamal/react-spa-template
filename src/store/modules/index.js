import { combineReducers } from 'redux';
import baseApi from '@/api/base.api';
import theme from './theme/theme.slice';

export default combineReducers({
  theme,
  [baseApi.reducerPath]: baseApi.reducer,
});
