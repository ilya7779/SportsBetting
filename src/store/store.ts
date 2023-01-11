import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {eventsReducer} from "./reducers";
import {EventsActions} from "./actions";

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  traceLimit: 20,
  trace: true,
});

let middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares];
}

const rootReducer = combineReducers({
  events: eventsReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export type AppActions = EventsActions;
export type AppThunk = ThunkAction<void, RootState, unknown, AppActions>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;