import { sliceName } from "./slice";
import { RootState } from "../store";

const getCurrentForecastData = (store: RootState) => store[sliceName].data;
const getPlaceName = (store:RootState) => store[sliceName].placeName;
const isLoading =  (store:RootState) => store[sliceName].loading;

export{
  getCurrentForecastData,
  getPlaceName,
  isLoading,
}
