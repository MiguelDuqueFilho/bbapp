import api from './api';

async function loadEventsService(page, limit = 5) {
  let events = [];
  try {
    const response = await api.get(`/events?page=${page}&limit=${limit}`);
    events = response.data.data;
  } catch (_err) {}
  return events;
}

module.exports = {loadEventsService};
