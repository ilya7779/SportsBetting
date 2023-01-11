import {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";

import styles from './Main.module.css';
import {
  betsSelector,
  currentEventsSelector,
  getCurrentEventsTC,
  getUpcomingEventsTC,
  upcomingEventsSelector,
  useAppDispatch
} from "../../store";
import {Event} from "../../components";
import {EventWithBet} from "../../types";


export const Main = () => {
  const dispatch = useAppDispatch();

  const currentEventList = useSelector(currentEventsSelector);
  const upcomingEventList = useSelector(upcomingEventsSelector);
  const bets = useSelector(betsSelector);
  const [lastBet, setLastBet] = useState<EventWithBet | null>(null);

  useEffect(() => {
    const betsCount = bets.length;
    if (betsCount === 0) return;

    const lastBet = bets[betsCount-1]
    setLastBet(lastBet);
  }, []);

  useEffect(() => {
    dispatch(getCurrentEventsTC());
    dispatch(getUpcomingEventsTC());
  }, []);


  const currentEvents = useMemo(() => {
    return currentEventList?.map((event) =>
      <li key={event.id}><Event events={event} key={event.id} /></li>
    );
  }, [currentEventList]);

  const upcomingEvents = useMemo(() => {
    return upcomingEventList?.map((event) =>
      <li key={event.id}><Event events={event} key={event.id} /></li>
    );
  }, [upcomingEventList]);

  return (
    <main className={styles.wrapper}>
      {lastBet &&
        <div className={styles.notification}>
          <div className={styles.notification__description}>Спасибо, ваша ставка: {lastBet.team1} - {lastBet.team2}, {lastBet.bet} принята</div>
          <button className={styles.notification__buttonCross}
          onClick={() => setLastBet(null)}>&#10006;</button>
        </div>}
      <h2 className={styles.title}>Текущие события</h2>
      <ul>
        { currentEvents }
      </ul>
      <h2 className={styles.title}>Предстоящие события</h2>
      <ul>
        { upcomingEvents }
      </ul>
    </main>
  );
};