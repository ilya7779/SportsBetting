import type { RootState } from './store';

export const currentEventsSelector = (state: RootState) => state.events.currentEvents;
export const upcomingEventsSelector = (state: RootState) => state.events.upcomingEvents;
export const eventDetailsSelector = (state: RootState) => state.events.eventDetails;
export const betsSelector = (state: RootState) => state.events.bets;