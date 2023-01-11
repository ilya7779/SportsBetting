import * as t from './../actions'
import {EventsActions} from '../actions';
import {Event, EventDetails, EventWithBet} from "../../types";


type EventsState = {
  currentEvents: Event[],
  upcomingEvents: Event[],
  eventDetails: EventDetails | null,
  bets: EventWithBet[],
};

const initialState: EventsState = {
  currentEvents: [],
  upcomingEvents: [],
  eventDetails: null,
  bets: [],
};

export const eventsReducer = (state = initialState, action: EventsActions): EventsState => {
  switch (action.type) {
    case t.SET_CURRENT_EVENTS: {
      return { ...state, currentEvents: action.payload };
    }
    case t.SET_UPCOMING_EVENTS: {
      return { ...state, upcomingEvents: action.payload };
    }
    case t.SET_EVENT_DETAILS: {
      return { ...state, eventDetails: action.payload };
    }
    case t.SET_BET: {
      return { ...state, bets: [...state.bets, action.payload] };
    }
    default:
      return state;
  }
};
