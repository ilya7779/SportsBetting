import {FC} from "react";
import {useNavigate} from "react-router-dom";

import styles from "./Event.module.css";
import {Event as EventType} from "../../types";


type EventProps = {
  events: EventType
}

export const Event: FC<EventProps> = ({ events }) => {
  const {id, team1, team2} = events
  const navigate = useNavigate();


  const openEventHandler = () => {
    navigate(`/event/${id}`);
  }

  return (
    <div className={styles.wrapper} onClick={() => openEventHandler()}>
      <div className={styles.title}>{team1} - {team2}</div>
    </div>
  );
};