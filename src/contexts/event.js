import React, {createContext, useState, useEffect, useContext} from 'react';
import {loadEventsService} from '../services/eventServices';

const EventContext = createContext({
  events: [],
  event: {},
  total: 0,
});

export const EventsProvider = ({children}) => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadEvenstUseEffect = async () => {
      await loadEvents();
    };
    loadEvenstUseEffect();
  }, []);

  function eventselected(event) {
    setEvent(event);
  }

  async function loadEvents() {
    if (loading) return;

    if (total > 0 && events.length === total) return;

    setLoading(true);
    const response = await loadEventsService(page + 1);
    setLoading(false);

    if (response.length === 0) return;
    setEvents([...events, ...response.docs]);
    setTotal(response.total);
    setPage(response.page);
  }

  return (
    <EventContext.Provider
      value={{events, event, total, loadEvents, eventselected}}>
      {children}
    </EventContext.Provider>
  );
};

export function useEvent() {
  const context = useContext(EventContext);
  return context;
}
