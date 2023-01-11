import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {ChangeEvent, useEffect, useState} from "react";

import styles from './EventDetails.module.css'
import {eventDetailsSelector, getEventDetailsTC, setBetAC, useAppDispatch} from "../../store";

export const EventDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const eventDetails = useSelector(eventDetailsSelector);

  const [bet, setBet] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getEventDetailsTC(id || '' as string))
  }, [dispatch]);

  if (eventDetails === null) {
    return null;
  }
  const handleBet = (e: ChangeEvent<HTMLInputElement>) => {
    setBet(e.target.value);
  }

  const submitBet = () => {
    if (!bet) return;

    const newBet = {...eventDetails, bet: Number(bet)}
    dispatch(setBetAC(newBet))
    navigate(`/`);
  }

  const {team1, team2, date, coefficients} = eventDetails;

  return (
    <div className={styles.wrapper}>
      <div className={styles.eventDetails}>
        <div className={styles.eventDetails__teams}>{team1} - {team2}</div>
        <div className={styles.eventDetails__date}>{date}</div>
        <form className={styles.form}>
          <div className={styles.radioGroup}>
            <input className={styles.radioGroup__input}
                   value={coefficients.win1}
                   checked={bet === String(coefficients.win1)}
                   onChange={(e) => handleBet(e)}
                   type="radio" id="option-one" name="selector"/>
            <label className={styles.radioGroup__input} htmlFor="option-one">
              <div className={styles.input__title}>Победит 1</div>
              <div className={styles.input__coefficient}>{coefficients.win1}</div>
            </label>
            <input className={styles.radioGroup__input} value={coefficients.draw}
                   checked={bet === String(coefficients.draw)}
                   type="radio" id="option-two"
                   name="selector"
                   onChange={(e) => handleBet(e)}/>
            <label className={styles.radioGroup__input} htmlFor="option-two">
              <div className={styles.input__title}>Ничья</div>
              <div className={styles.input__coefficient}>{coefficients.draw}</div>
            </label>
            <input className={styles.radioGroup__input} value={coefficients.win2}
                   checked={bet === String(coefficients.win2)}
                   type="radio" id="option-three" name="selector"
                   onChange={(e) => handleBet(e)}/>
            <label className={styles.radioGroup__input} htmlFor="option-three">
              <div className={styles.input__title}>Победит 2</div>
              <div className={styles.input__coefficient}>{coefficients.win2}</div>
            </label>
          </div>
        </form>
        <button className={styles.eventDetails__button}
                disabled={!bet}
                type="button"
                onClick={() => submitBet()}
        >Сделать ставку
        </button>
      </div>
    </div>
  );
}