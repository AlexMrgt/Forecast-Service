import { RootState } from "../store";
import { sliceName } from './slice';

const getWeekForecast = (store: RootState) => store[sliceName].data;
const getPlaceName = (store:RootState) => store[sliceName].placeName;
const isLoading =  (store:RootState) => store[sliceName].loading;

export {
  getWeekForecast,
  getPlaceName,
  isLoading,
}
