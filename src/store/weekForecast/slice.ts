import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { WeekForecastData } from "../../utils/interfaces";
import { ThunkApi } from "../store";

const sliceName = 'weekForecast';

const loadWeekForecastByName = createAsyncThunk<WeekForecastData, string, ThunkApi>(
  `${sliceName}/loadWeekForecastByName`,
  async (name, { dispatch, extra: { forecastApi, geoApi } }) => {
    dispatch(setPlaceName(name));

    const placePosition = await geoApi.getPlaceCoordsByName(name);
    if(placePosition.length===0) return null;

    const data = await forecastApi.getWeekForecastByCoords(placePosition[0].lat, placePosition[0].lon);
    return data;
  }
);

const loadWeekForecastByCoords = createAsyncThunk<WeekForecastData, { latitude: number, longitude: number }, ThunkApi>(
  `${sliceName}/loadWeekForecastByCoords`,
  async (coords, { dispatch, extra: { forecastApi,geoApi } }) => {
    const placeName = await geoApi.getPlaceNameByCoords(coords.latitude, coords.longitude);
    dispatch(setPlaceName(placeName[0].local_names.ru));
    const data = await forecastApi.getWeekForecastByCoords(coords.latitude, coords.longitude);
    return data;
  }
);

interface WeekForecastState {
  data: WeekForecastData | null,
  placeName: string,

  loading: boolean,
  loadingError: SerializedError | null
};

const initialState: WeekForecastState = {
  data: null,
  placeName: '',

  loading: false,
  loadingError: null,
};

const weekForecastSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setPlaceName(state, action: PayloadAction<string>) {
      state.placeName = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadWeekForecastByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadWeekForecastByName.fulfilled, (state, action) => {

      state.loading = false;
      state.loadingError = null;
      state.data = action.payload? action.payload : null;

    });
    builder.addCase(loadWeekForecastByName.rejected, (state, action) => {
      state.loading = false;
      state.loadingError = action.error;
    });

    builder.addCase(loadWeekForecastByCoords.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadWeekForecastByCoords.fulfilled, (state, action) => {

      state.loading = false;
      state.loadingError = null;
      state.data = action.payload;
    });
    builder.addCase(loadWeekForecastByCoords.rejected, (state, action) => {
      state.loading = false;
      state.loadingError = action.error;
    });
  }
});

const { actions, reducer } = weekForecastSlice;
export const { setPlaceName } = actions;

export default reducer;

export {
  sliceName,

  loadWeekForecastByName,
  loadWeekForecastByCoords,
}
