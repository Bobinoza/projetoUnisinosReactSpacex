import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingState from '../components/LoadingState';

import './singleCrew.css';


export default function SingleCrew() {
  const [singleCrew, setSingleCrew] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleCrew = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`);
      const data = await res.json();
      setSingleCrew(data)
    }

    fetchSingleCrew();
  }, [id]);

  return (
    <>
      {
        !singleCrew ? (
          <LoadingState />
        ) : (
          <section className='singleCrewWrapper'>
            <div className='singleCrewWrapper2'>
              <article>
                <img src={singleCrew.image} alt={singleCrew.name} />
              </article>

              <article className='singleCrewContent'>
                <h1>{singleCrew.name}</h1>
                <h2>Details</h2>
                <ul>
                  <li>Currently at {singleCrew.agency}</li>
                  {singleCrew.status === "active" ? (
                    <li className="singleCrewActiveStatus">
                      Status: {singleCrew.status}
                    </li>
                  ) : (
                    <li className="singleCrewOffStatus">
                      Status: {singleCrew.status}
                    </li>
                  )}
                </ul>

                <ul className="singleCrewButtons">
                  <li>
                    <a
                      href={singleCrew.wikipedia}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Wikipedia
                    </a>
                  </li>
                  <li className="">
                    <Link to="/crew">&larr; Back</Link>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        )
      }
    </>
  )
}