
import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { CurrentForecastData, CurrentOneCallResponse } from "../../utils/interfaces";
import { ThunkApi } from "../store";

const sliceName = 'currentForecast';

const loadCurrentForecastByName = createAsyncThunk<CurrentOneCallResponse, string, ThunkApi>(
  `${sliceName}/loadCurrentForecastByName`,
  async (name, { dispatch, extra: { forecastApi, geoApi } }) => {
    dispatch(setPlaceName(name));

    const placePosition = await geoApi.getPlaceCoordsByName(name);
    if (placePosition.length === 0) return null;

    const data = await forecastApi.getCurrentForecastByCoords(placePosition[0].lat, placePosition[0].lon);
    return data;
  }
);

const loadCurrentForecastByCoords = createAsyncThunk<CurrentOneCallResponse, GeolocationCoordinates, ThunkApi>(
  `${sliceName}/loadCurrentForecastByCoords`,
  async (coords, { dispatch, extra: { forecastApi, geoApi } }) => {
    const placeName = await geoApi.getPlaceNameByCoords(coords.latitude, coords.longitude);
    dispatch(setPlaceName(placeName[0].local_names.ru));
    const data = await forecastApi.getCurrentForecastByCoords(coords.latitude, coords.longitude);
    return data;
  }
);

interface CurrentForecastState {
  data: CurrentForecastData | null,
  placeName: string,

  loading: boolean,
  loadingError: SerializedError | null
}

const initialState: CurrentForecastState = {
  data: null,
  placeName: '',

  loading: false,
  loadingError: null,
}

const currentForecastSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setPlaceName(state, action: PayloadAction<string>) {
      state.placeName = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadCurrentForecastByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadCurrentForecastByName.fulfilled, (state, action) => {
      state.loading = false;
      state.loadingError = null;
      state.data = action.payload ? action.payload.current : null;
    });
    builder.addCase(loadCurrentForecastByName.rejected, (state, action) => {
      state.loading = false;
      state.loadingError = action.error;
    });

    builder.addCase(loadCurrentForecastByCoords.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadCurrentForecastByCoords.fulfilled, (state, action) => {
      state.loading = false;
      state.loadingError = null;
      state.data = action.payload.current;
    });
    builder.addCase(loadCurrentForecastByCoords.rejected, (state, action) => {
      state.loading = false;
      state.loadingError = action.error;
    });
  }
});

const { actions, reducer } = currentForecastSlice;

export default reducer;

export const { setPlaceName } = actions;

export {
  sliceName,
  loadCurrentForecastByName,
  loadCurrentForecastByCoords,
}
