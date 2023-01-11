import * as t from './actions.types'
import {Event, EventDetails, EventWithBet} from "../../types";
import {AppThunk} from "../store";
import {getCurrentEvents, getEventDetails, getUpcomingEvents} from "../../api";


export const setCurrentEventsAC = (payload: Event[]) => {
  return {type: t.SET_CURRENT_EVENTS, payload} as const;
};
export const setUpcomingEventsAC = (payload: Event[]) => {
  return {type: t.SET_UPCOMING_EVENTS, payload} as const;
};
export const setEventDetailsAC = (payload: EventDetails) => {
  return {type: t.SET_EVENT_DETAILS, payload} as const;
};
export const setBetAC = (payload: EventWithBet) => {
  return {type: t.SET_BET, payload} as const;
};

export const getCurrentEventsTC = (): AppThunk => async (dispatch) => {
  try {
    const result = await getCurrentEvents();
    const events = result.data.events;
    const currentEvents = events.filter((event) => event.status === 'running');
    dispatch(setCurrentEventsAC(currentEvents));
  } catch (e) {
    console.error(e);
  }
};

export const getUpcomingEventsTC = (): AppThunk => async (dispatch) => {
  try {
    const result = await getUpcomingEvents();
    const events = result.data.events;
    const upcomingEvents = events.filter((event) => event.status === 'upcoming');
    dispatch(setUpcomingEventsAC(upcomingEvents));
  } catch (e) {
    console.error(e);
  }
};

export const getEventDetailsTC = (id: string): AppThunk => async (dispatch) => {
  try {
    const result = await getEventDetails(id);
    dispatch(setEventDetailsAC(result.data.event));
  } catch (e) {
    console.error(e);
  }
};

type SetCurrentEventsAction = ReturnType<typeof setCurrentEventsAC>;
type SetUpcomingEventsAction = ReturnType<typeof setUpcomingEventsAC>;
type SetFullEventAction = ReturnType<typeof setEventDetailsAC>;
type setBetAction = ReturnType<typeof setBetAC>;

export type EventsActions =
  SetFullEventAction
  | SetCurrentEventsAction
  | SetUpcomingEventsAction
  | setBetAction;


