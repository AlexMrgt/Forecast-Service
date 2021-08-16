import {
  TypedUseSelectorHook,
  useDispatch as useDispatchRedux,
  useSelector as useSelectorRedux,
} from "react-redux";

import type { RootState, AppDispatch } from "./store";

export const useDispatchReduxThunk = () => useDispatchRedux<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
