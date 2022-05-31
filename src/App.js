import './App.css';
import {useState} from 'react';
import TripList from './components/TripList';

function App() {
  const [showTrips, setShowTrips] = useState (true)
  return (
    <div className="App">
      {showTrips &&<button onClick={(()=>{setShowTrips(false)})} className="filters">hide trips</button>}
     
      {!showTrips &&<button onClick={(()=>{setShowTrips(true)})} className="filters">show trips</button>}       
      {showTrips && <TripList/>}
    </div>
  );
}

export default App;
