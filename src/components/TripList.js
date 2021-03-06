import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './TripList.css'

export default function TripList() {
  const [url, setUrl] = useState('https://my-json-server.typicode.com/jinzxu/tripgoapp/db')
  const { data: trips, isPending, error } = useFetch(url)
  console.log(trips)
  
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div>Loading trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips && trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('https://my-json-server.typicode.com/jinzxu/tripgoapp/db?loc=europe')}>
          European Trips
        </button>
        <button onClick={() => setUrl('https://my-json-server.typicode.com/jinzxu/tripgoapp/db')}>
          All Trips
        </button>
      </div>
    </div>
  )
}