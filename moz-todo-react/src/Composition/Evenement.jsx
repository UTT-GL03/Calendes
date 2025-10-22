import { useState, useEffect } from 'react'

const EventForm = ({ selectedEvent, onSubmit, onDelete, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    startTime: '',
    duration: '',
    recurring: false,
    place: '',
    description: ''
  });

//Mise à jour quand un evenement est créé
  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        title: selectedEvent.title || '',
        date: selectedEvent.date ? formatDateForInput(selectedEvent.date) : '',
        startTime: selectedEvent.Time || '',
        duration: selectedEvent.duration || '',
        recurring: selectedEvent.récurrence === "true",
        place: selectedEvent.location || '',
        description: selectedEvent.description || ''
      });
    } else {
      setFormData({
        title: '',
        date: '',
        startTime: '',
        duration: '',
        recurring: false,
        place: '',
        description: ''
      });
    }
  }, [selectedEvent]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Format date
  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const parts = dateString.split('/');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateString;
  };

  return (
    <div className='event-form'>
      <h2>{selectedEvent ? 'Modifier Événement' : 'Créer Événement'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Titre:
            <input 
              type="text" 
              name="title" 
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Nom de l'événement"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Date:
            <input 
              type="date" 
              name="date" 
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>
              Heure de début:
              <input 
                type="time" 
                name="startTime" 
                value={formData.startTime}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          
          <div className="form-group">
            <label>
              Durée:
              <input className="DuréeDeMerde"
                type="text" 
                name="duration" 
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="ex: 2 heures"
                required
              />
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            Événement récurrent
            <input 
              type="checkbox" 
              name="recurring" 
              checked={formData.recurring}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Lieu:
            <input 
              type="text" 
              name="place" 
              value={formData.place}
              onChange={handleInputChange}
              placeholder="Lieu de l'événement"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Description:
            <textarea 
              name="description" 
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              placeholder="Description supplémentaire..."
            />
          </label>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            {selectedEvent ? 'Modifier' : 'Créer'}
          </button>
          {selectedEvent && (
            <>
              <button type="button" onClick={onDelete} className="delete-btn">
                Supprimer
              </button>
              <button type="button" onClick={onCancel} className="cancel-btn">
                Annuler
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default EventForm;