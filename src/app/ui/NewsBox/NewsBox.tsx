"use client";

import { ReactElement, useEffect, useState } from "react";
import {
  convertStringToDate,
  newsCategories,
  NewsEvent,
  newsEvents,
} from "./helpers/utils";
import cc from "classcat";

import styles from "./newsBox.module.scss";

interface NewsBoxProps {
  date: Date;
}

const msInDay = 1000 * 60 * 60 * 24;

export default function NewsBox({ date }: NewsBoxProps) {
  const [currentEvents, setCurrentEvents] = useState<NewsEvent[]>([]);

  const addToArray = (newItem: NewsEvent, newsArray: NewsEvent[]) => {
    const maxNewsIems = 3;
    if (newsArray.length > maxNewsIems) {
      const indexToRemove = newsArray.findIndex((event) => !event.endDate);
      newsArray.splice(indexToRemove, 1);
    }

    newsArray.push(newItem);
  };

  const cleanCurrentEvents = (events: NewsEvent[]): NewsEvent[] => {
    const eventLifetime = 8 * msInDay;

    return events.filter((event) => {
      if (event.endDate) {
        const eventEndDate = convertStringToDate(event.endDate);
        return eventEndDate.getTime() > date.getTime();
      }

      const eventDate = convertStringToDate(event.startDate);
      return eventDate.getTime() + eventLifetime > date.getTime();
    });
  };

  useEffect(() => {
    const todaysEvents = newsEvents.filter((event) => {
      const eventDate = convertStringToDate(event.startDate);
      return eventDate.getTime() === date.getTime();
    });

    setCurrentEvents((originalEvents) => {
      const newCurrentEvents = cleanCurrentEvents([...originalEvents]);
      todaysEvents.forEach((event) => addToArray(event, newCurrentEvents));
      return newCurrentEvents;
    });
  }, [date]);

  const getTextClasses = (eventCategory: newsCategories): string => {
    return cc({
      [styles.covidText]: eventCategory === newsCategories.covid,
      [styles.newsText]: eventCategory === newsCategories.news,
    });
  };

  const getEventText = (event: NewsEvent): ReactElement => {
    if (event.endDate) {
      return (
        <>
          Ongoing -{" "}
          <span className={getTextClasses(event.category)}>{event.text}</span>
        </>
      );
    } else {
      const eventDate = convertStringToDate(event.startDate);
      return (
        <>
          {eventDate.toDateString()} -{" "}
          <span className={getTextClasses(event.category)}>{event.text}</span>
        </>
      );
    }
  };

  return (
    <div className={styles.boxWrapper}>
      {currentEvents.map((event) => {
        return <p>{getEventText(event)}</p>;
      })}
    </div>
  );
}
