import { useState, useEffect } from 'react'
import './App.css'
import EventForm from './Composition/Evenement'

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const dbUrl = 'http://localhost:5984/calendes/';

  // Helper function to fetch events
  const fetchEvents = () => {
    fetch(dbUrl + '_all_docs?include_docs=true')
      .then(x => x.json())
      .then(data => {
        if (data.rows) {
          const allEvents = data.rows.map(row => row.doc).filter(doc => !doc._id.startsWith('_'));
          setEvents(allEvents || []);
        } else {
          setEvents([]);
        }
      })
      .catch(err => {
        console.error('Error fetching events:', err);
        setEvents([]);
      });
  };

  // Chargement Initial (useEffect)
  useEffect(() => {
    fetchEvents();
  }, []);

  // Formatage date pour le stockage (DD/MM/YYYY)
  const formatDateForStorage = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Soumission du Formulaire (Ajout/Modification)
  const handleFormSubmit = (formData) => {
    const eventData = {
      title: formData.title,
      date: formatDateForStorage(formData.date),
      Time: formData.startTime,
      duration: formData.duration,
      récurrence: formData.recurring ? "true" : "false",
      location: formData.place,
      description: formData.description
    };

    if (selectedEvent && selectedEvent._id) {
      // Modification (Update)
      const eventToUpdate = {
        ...eventData,
        _id: selectedEvent._id,
        _rev: selectedEvent._rev // Essential for update in CouchDB
      };

      fetch(dbUrl + eventToUpdate._id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventToUpdate)
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            // Update successful, fetch the new list to get the new _rev
            fetchEvents();
            setSelectedEvent(null);
          } else {
            console.error('Error updating event:', data);
          }
        })
        .catch(err => console.error('Error in PUT request:', err));

    } else {
      // Ajout (Create) - Use POST for new docs in CouchDB
      fetch(dbUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            // Creation successful, fetch the new list to include _id and _rev
            fetchEvents();
          } else {
            console.error('Error creating event:', data);
          }
        })
        .catch(err => console.error('Error in POST request:', err));
    }
  };

  // Suppression d'événement
  const handleDeleteEvent = () => {
    if (selectedEvent && selectedEvent._id && selectedEvent._rev) {
      const deleteUrl = `${dbUrl}${selectedEvent._id}?rev=${selectedEvent._rev}`;

      fetch(deleteUrl, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            // Deletion successful, refresh the event list
            fetchEvents();
            setSelectedEvent(null);
          } else {
            console.error('Error deleting event:', data);
          }
        })
        .catch(err => console.error('Error in DELETE request:', err));
    }
  };

  // Sélectionner un événement
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  // Annuler la modification
  const handleCancelEdit = () => {
    setSelectedEvent(null);
  };

  const getUpcomingEvents = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 est Dimanche, 1 est Lundi
    const diff = now.getDate() - currentDay + (currentDay === 0 ? -6 : 1) + 7;
    const startOfNextWeek = new Date(now.setDate(diff));
    startOfNextWeek.setHours(0, 0, 0, 0);

    const upcomingEventsCount = 5; // Nombre d'événements à afficher

    return events
      .filter(event => {
        try {
          // Parse DD/MM/YYYY
          const [day, month, year] = event.date.split('/');
          const eventDate = new Date(year, month - 1, day);
          return eventDate >= startOfNextWeek;
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
          const dateComparison = dateA - dateB;

          if (dateComparison !== 0) {
            return dateComparison;
          }

          const parseTime = (timeString) => {
            if (!timeString) return 0;
            const [hours, minutes] = timeString.split(':').map(Number);
            return (hours * 60) + minutes;
          };

          const timeA = parseTime(a.Time);
          const timeB = parseTime(b.Time);

          return timeA - timeB;

        } catch (e) {
          console.warn('Erreur de tri des événements', e);
          return 0;
        }
      })
      .slice(0, upcomingEventsCount);
  };

  // evenement semaine actuelle
  const getWeekEvents = (weekOffset) => {
    const weekEvents = {};
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    days.forEach(day => {
      weekEvents[day] = {};
    });

    if (!Array.isArray(events)) return weekEvents;

    const parseTime = (timeString) => {
        if (!timeString) return 0;
        const [hours, minutes] = timeString.split(':').map(Number);
        return (hours * 60) + minutes;
    };

    const sortedEvents = [...events].sort((a, b) => {
        try {
            const [dayA, monthA, yearA] = a.date.split('/');
            const [dayB, monthB, yearB] = b.date.split('/');
            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);
            
            const dateComparison = dateA - dateB;

            if (dateComparison !== 0) {
                return dateComparison;
            }
            
            // Si les dates sont égales, trier par heure exacte
            return parseTime(a.Time) - parseTime(b.Time);

        } catch (e) {
            console.warn('Erreur de tri des événements', e);
            return 0;
        }
    });

    // Get the start of the current week (Monday)
    const now = new Date();
    const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday
    const daysToMonday = currentDay === 0 ? 6 : currentDay - 1; // Jours à retirer pour atteindre le Lundi
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - daysToMonday + (weekOffset * 7));
    startOfWeek.setHours(0, 0, 0, 0);

    // Get the end of the current week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    sortedEvents.forEach(event => {
      try {
        const [day, month, year] = event.date.split('/');
        const eventDate = new Date(year, month - 1, day);

        // Check if the event falls within the current calendar week (Monday to Sunday)
        if (eventDate >= startOfWeek && eventDate <= endOfWeek) {
          const dayIndex = eventDate.getDay(); 
          const dayName = days[dayIndex === 0 ? 6 : dayIndex - 1];
          const hour = event.Time?.split(':')[0]; 

          if (dayName && hour) {
            if (!weekEvents[dayName][hour]) {
              weekEvents[dayName][hour] = [];
            }
            weekEvents[dayName][hour].push(event);
          }
        }
      } catch (error) {
        console.warn('Erreur de format de date pour l\'affichage:', event.date, error);
      }
    });

    return weekEvents;
  };

  const weekEvents = getWeekEvents(weekOffset);
  const nextweek = () => {
    setWeekOffset(prevOffset => prevOffset + 1); // Incrémente l'index de la semaine
  }
  const prevweek = () => {
    setWeekOffset(prevOffset => prevOffset - 1); // Ajout d'une fonction pour la semaine précédente
  }
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
                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                  <th key={day} scope="col" className='day-column'>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Generate rows for 00:00, 02:00, ..., 22:00 */}
              {Array.from({ length: 12 }, (_, i) => String(i * 2).padStart(2, '0')).map(hour => (
                <tr key={hour}>
                  <td className="hour-cell">{hour}:00</td>
                  {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                    <td key={day} className="day-cell">
                      {weekEvents[day] && weekEvents[day][hour] &&
                        weekEvents[day][hour].map((event) => (
                          <div
                            key={event._id}
                            className={`event ${event.récurrence === "true" ? 'recurrent' : 'onetime'}`}
                            onClick={() => handleEventSelect(event)}
                            title={`${event.title} - ${event.Time} - ${event.date}`}
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
        <div className='nextweek'>
          <button type="button" onClick={prevweek} className="prev-week-button">
            Semaine Précédente
          </button>
          <button type="button" onClick={nextweek} className="next-week-button">
            Semaine Suivante
          </button>
        </div>
      </div>

      <div className="upcoming-events">
        <h2>Événements à Venir</h2>
        {upcomingEvents.length === 0 ? (
          <p className="no-events">Aucun événement à venir</p>
        ) : (
          <ol>
            {upcomingEvents.map((event) => (
              <li key={event._id}>
                <div
                  className="upcoming-event"
                  onClick={() => handleEventSelect(event)}
                >
                  <strong className="event-title">{event.title}</strong>
                  <div className="event-date">{event.date}</div>
                  <div className="event-details">
                    <span className="event-time">{event.Time}</span>
                    {event.location && <span className="event-location">• {event.location}</span>}
                  </div>
                  <lb></lb>
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