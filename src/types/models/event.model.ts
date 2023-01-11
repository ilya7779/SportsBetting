import {Coefficient} from "./coefficient.model";

export type Event = {
  id: number,
  status: string,
  team1: string,
  team2: string,
}

export type EventDetails = {
  id: number,
  team1: string,
  team2: string,
  date: string,
  coefficients: Coefficient,

}

export type EventWithBet = EventDetails & { bet: number }
