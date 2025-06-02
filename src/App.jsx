import { useState } from 'react'
import { SportsActivityCard }  from './components/SportsActivityCard';
import './styles/App.css'; // Para el grid
import { activitiesData } from './constants'; 

function App() {
  return (
    <div className="activities-grid-container">
      {activitiesData.map((activity) => (
        <SportsActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export default App;
