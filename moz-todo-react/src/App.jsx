import { useState, useEffect } from 'react'
import './App.css'
import data from '../public/sample_data.json'
import EventForm from './Composition/Evenement'

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Chargement
  useEffect(() => {
    fetch('sample_data.json')
      .then(x => x.json())
      .then(data => {
        setEvents(data.events);
      })
  }, []);

  // Formulaire
  const handleFormSubmit = (formData) => {
    if (selectedEvent) {
      // Modification
      setEvents(prev => prev.map(event =>
        event === selectedEvent ? {
          ...selectedEvent,
          title: formData.title,
          date: formatDateForStorage(formData.date),
          Time: formData.startTime,
          duration: formData.duration,
          récurrence: formData.recurring ? "true" : "false",
          location: formData.place,
          description: formData.description
        } : event
      ));
    } else {
      // Ajout
      const newEvent = {
        title: formData.title,
        date: formatDateForStorage(formData.date),
        Time: formData.startTime,
        duration: formData.duration,
        récurrence: formData.recurring ? "true" : "false",
        location: formData.place,
        description: formData.description
      };
      setEvents(prev => [...prev, newEvent]);
    }

    setSelectedEvent(null);
  };

  // Formatage date
  const formatDateForStorage = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // selection evenement
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  // delete evenement
  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(prev => prev.filter(event => event !== selectedEvent));
      setSelectedEvent(null);
    }
  };

  // annuler modiff
  const handleCancelEdit = () => {
    setSelectedEvent(null);
  };

  // evenements à venir, ligne du bas
  const getUpcomingEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    nextWeek.setHours(23, 59, 59, 999);

    return events
      .filter(event => { //algo pour les mettre dans l'ordre
        try {
          const [day, month, year] = event.date.split('/');
          const eventDate = new Date(year, month - 1, day);
          return eventDate >= today;
        } catch {
          return false;
        }
      })
      .sort((a, b) => {
        try {
          const [dayA, monthA, yearA] = a.date.split('/');
          const [dayB, monthB, yearB] = b.date.split('/');
          const dateA = new Date(yearA, monthA - 1, dayA);
          const dateB = new Date(yearB, monthB - 1, dayB);
          return dateA - dateB;
        } catch {
          return 0;
        }
      })
      .slice(0, 5);
  };

  // evenement semaine actuelle
  const getWeekEvents = () => {
    const weekEvents = {};
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    // Structure
    days.forEach(day => {
      weekEvents[day] = {};
    });

    // placement evenement à revoir
    events.forEach(event => {
      try {
        const [day, month, year] = event.date.split('/');
        const eventDate = new Date(year, month - 1, day);
        const dayIndex = eventDate.getDay();
        const dayName = days[dayIndex === 0 ? 6 : dayIndex - 1];
        const hour = event.Time.split(':')[0];

        if (!weekEvents[dayName][hour]) {
          weekEvents[dayName][hour] = [];
        }
        weekEvents[dayName][hour].push(event);
      } catch (error) {
        console.warn('Erreur de format de date:', event.date);
      }
    });

    return weekEvents;
  };

  const weekEvents = getWeekEvents();
  const upcomingEvents = getUpcomingEvents();

  return (
    <>
      <header className="app-header">
        <h1>Calendes</h1>
        <p>Votre calendrier écologique et efficace</p>
      </header>

      <div className='screen'>
        <div className="week-view">
          <h2>Semaine Actuelle</h2>
          <table>
            <thead>
              <tr>
                <th scope="col" className='time-column'>Heure</th>
                <th scope="col" className='day-column'>Lundi</th>
                <th scope="col" className='day-column'>Mardi</th>
                <th scope="col" className='day-column'>Mercredi</th>
                <th scope="col" className='day-column'>Jeudi</th>
                <th scope="col" className='day-column'>Vendredi</th>
                <th scope="col" className='day-column'>Samedi</th>
                <th scope="col" className='day-column'>Dimanche</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }, (_, i) => i * 2).map(hour => (
                <tr key={hour}>
                  <td className="hour-cell">{hour}:00</td>
                  {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                    <td key={day} className="day-cell">
                      {weekEvents[day] && weekEvents[day][hour] &&
                        weekEvents[day][hour].map((event, index) => (
                          <div
                            key={index}
                            className={`event ${event.récurrence === "true" ? 'recurrent' : 'onetime'}`} //couleur recurence
                            onClick={() => handleEventSelect(event)}
                            title={`${event.title} - ${event.Time}`}
                          >
                            <strong>{event.title}</strong>
                            <span className="event-time">{event.Time}</span>
                          </div>
                        ))
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="form-section">
          <EventForm
            selectedEvent={selectedEvent}
            onSubmit={handleFormSubmit}
            onDelete={handleDeleteEvent}
            onCancel={handleCancelEdit}
          />
        </div>
      </div>

      <div className="upcoming-events">
        <h2>Événements à Venir</h2>
        {upcomingEvents.length === 0 ? (
          <p className="no-events">Aucun événement à venir cette semaine</p>
        ) : (
          <ol>
            {upcomingEvents.map((event, index) => (
              <li key={index}>
                <div
                  className="upcoming-event"
                  onClick={() => handleEventSelect(event)}
                >
                  <div className="event-date">{event.date}</div>
                  <strong className="event-title">{event.title}</strong>
                  <div className="event-details">
                    <span className="event-time">{event.Time}</span>
                    {event.location && <span className="event-location">• {event.location}</span>}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}

export default App;