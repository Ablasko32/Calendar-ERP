import { Calendar } from "fullcalendar";

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new Calendar(calendarEl, {
    eventColor: "#0a6da4",
    initialView: "timeGridDay",
    footerToolbar: {
      center: "prev today next",
    },
    headerToolbar: {
      right: "dayGridMonth timeGridWeek timeGridDay",
    },
    eventTimeFormat: {
      hour: "numeric",
      minute: "2-digit",
      meridiem: false,
      hour12: false,
    },
    views: {
      timeGridWeek: {
        slotLabelFormat: {
          hour: "numeric",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        },
      },
      timeGridDay: {
        slotLabelFormat: {
          hour: "numeric",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        },
      },
      dayGridMonth: {
        dayMaxEventRows: 2,
      },
    },
    events: [
      {
        id: "1",
        title: "Test event",
        start: "2024-09-05T12:00:00",
        end: "2024-09-05T13:00:00",
        url: "https://www.links.hr/hr/?gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfPb9EVIeVRZqrAe6F3ZF6_5cImNakeAXxlH7iF8TzO8eSN8gmLWqURoCn4YQAvD_BwE",
      },
      {
        id: "1",
        title: "Test event",
        start: "2024-09-05T13:00:00",
        end: "2024-09-05T14:00:00",
        url: "https://www.links.hr/hr/?gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfPb9EVIeVRZqrAe6F3ZF6_5cImNakeAXxlH7iF8TzO8eSN8gmLWqURoCn4YQAvD_BwE",
      },
      {
        id: "1",
        title: "Test event",
        start: "2024-09-05T16:00:00",
        end: "2024-09-05T18:30:00",
        url: "https://www.links.hr/hr/?gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfPb9EVIeVRZqrAe6F3ZF6_5cImNakeAXxlH7iF8TzO8eSN8gmLWqURoCn4YQAvD_BwE",
      },
    ],
  });
  calendar.render();
});
