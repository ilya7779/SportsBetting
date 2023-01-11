import {Event, EventDetails} from "../../types";


export type GetEventDetailsRequest = string;

export type GetCurrentEventsResult = { events: Event[] };
export type GetUpcomingEventsResult = { events: Event[] };
export type GetEventDetailsResult = { event: EventDetails };
