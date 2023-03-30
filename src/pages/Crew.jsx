import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';

import './crew.css';


function Crew() {
  const [crew, setCrew] = useState([]);

  useState(() => {
    const fetchCrew = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/crew")
      const data = await res.json()
      setCrew(data)
    }

    fetchCrew();
  }, []);

  return (
    <>
      {!crew ? (
        <LoadingState />
      ) : (
        <div className='crewWrapper'>
          <h1>Crew</h1>

          <div className='crewContent'>
            {crew.map(({ id, name, image }) => (
              <Link key={id} to={`/crew/${id}`} className='crewLink'>
                <article className='crewArticle'>
                  <img src={image} alt={name} />
                  <h2>{name}</h2>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )
      }
    </>
  )
}

export default Crew;