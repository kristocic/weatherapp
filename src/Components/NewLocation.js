import { useState } from 'react';

const NewLocationName = ({ onAddLocation }) => {
    const [newLocationName, setNewLocationName] = useState('');
    const [newLocationLatitude, setNewLocationLatitude] = useState('');
    const [newLocationLongitude, setNewLocationLongitude] = useState('');

    const handleAddClick = () => {
        if (newLocationName && newLocationLatitude && newLocationLongitude) {
            onAddLocation({
                name: newLocationName,
                latitude: newLocationLatitude,
                longitude: newLocationLongitude,
            });

            setNewLocationName('');
            setNewLocationLatitude('');
            setNewLocationLongitude('');
        }
    };

    return (
        <div className="form">
            <label>Name:</label>
            <input
                placeholder='Enter location'
                value={newLocationName}
                onChange={(e) => setNewLocationName(e.target.value)}
            />
            <label>Longitude:</label>
            <input type = "number"
                placeholder='Enter Longitude'
                value={newLocationLatitude}
                onChange={(e) => setNewLocationLatitude(e.target.value)}
            />
            <label>Latitude:</label>
            <input type='number'
                placeholder='Enter Latitude'
                value={newLocationLongitude}
                onChange={(e) => setNewLocationLongitude(e.target.value)}
            />
            <button
                onClick={handleAddClick}
                disabled={!newLocationName || !newLocationLatitude || !newLocationLongitude ? true : false}

            >
                Add Location
            </button>
        </div>
    );
};

export default NewLocationName;