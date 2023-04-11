import React from 'react';
import './mission.css';
import { Counter } from '../components/CountData';


function Mission() {
  return (
    <div className='mission_wrapper'>
      <div>
        <section className='mission_section_1'>
          <div className='mission_section_1_texts'>
            <p>
              “Você quer acordar de manhã e pensar que o futuro será ótimo - e
              é disso que se trata ser uma civilização que viaja pelo espaço.
              É sobre acreditar no futuro e pensar que o futuro será melhor
              que o passado. E não consigo pensar em nada mais emocionante
              do que ir lá e estar entre as estrelas.”
            </p>
            <p>-Elon Musk</p>
          </div>
        </section>

        <section className='mission_section_2_cont'>
          <Counter />
        </section>

        <section className='mission_section_2'>
          <div className='mission_section_1_texts'>
            <p>
              “Você quer acordar de manhã e pensar que o futuro será ótimo - e
              é disso que se trata ser uma civilização que viaja pelo espaço.
              É sobre acreditar no futuro e pensar que o futuro será melhor
              que o passado. E não consigo pensar em nada mais emocionante
              do que ir lá e estar entre as estrelas.”
            </p>
            <p>-Elon Musk</p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Mission;