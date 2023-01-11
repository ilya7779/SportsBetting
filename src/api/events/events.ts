import { api } from '../api';
import type {
  GetCurrentEventsResult, GetEventDetailsRequest, GetEventDetailsResult, GetUpcomingEventsResult
} from './types';

export const getCurrentEvents = () => {
  return api.get<GetCurrentEventsResult>(`/api/events`);
};
export const getUpcomingEvents = () => {
  return api.get<GetUpcomingEventsResult>(`/api/events`);
};

export const getEventDetails = (id: GetEventDetailsRequest) => {
  return api.get<GetEventDetailsResult>(`/api/events/${id}`);
};

