import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart, Area, Tooltip, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, BarChart, Bar, PieChart, 
  Pie, RadialBarChart, RadialBar, ScatterChart, ZAxis, Scatter, ResponsiveContainer, 
  Cell 
} from 'recharts';

import LoadingState from '../components/LoadingState';
import datass from '../data.json';
import './home.css';

function Home() {
  const [company, setCompany] = useState(null);
  const [dragons, setDragons] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/company");
      const data = await res.json();
      setCompany(data);
    };

    const fetchDragons = async () => {
      const res = await axios.get("https://api.spacexdata.com/v4/dragons");
      setDragons(res.data);
    };

    fetchCompany();
    fetchDragons();
  }, []);

  const formatData = (dragons) => {
    return dragons.map((dragon) => ({
      name: dragon.name,
      active: dragon.active,
      crew_capacity: dragon.crew_capacity,
      first_flight: dragon.first_flight,
      flickr_images: dragon.flickr_images,
      dry_mass_kg: dragon.dry_mass_kg,
      dry_mass_lb: dragon.dry_mass_lb,
    }));
  };

  {/* */}
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  return (
    <>
      {!company || !dragons ? (
        <LoadingState />
      ) : (
        <div className="homeContent">
          <div className='homeContentTop'>
            <div className='homeWrapper1'>
              <article className='homeArticleAbout'>
                <h1>HEADQUARTERS</h1>
                <ul>
                  <li><span>Address: </span> {company.headquarters.address}</li>
                  <li><span>City: </span> {company.headquarters.city}</li>
                  <li><span>State: </span>{company.headquarters.state}</li>
                </ul>
                <div>
                  <h1>ABOUT THE COMPANY</h1>
                  <ul>
                    <li><span>Name: </span> {company.name}</li>
                    <li><span>Founder: </span> {company.founder}</li>
                    <li><span>Founded: </span> {company.founded}</li>
                    <li><span>Employees: </span> {company.employees}</li>
                    <li><span>Vehicles: </span> {company.vehicles}</li>
                    <li><span>Lauchsites: </span> {company.lauch_sites}</li>
                    <li><span>Testsites: </span> {company.test_sites}</li>
                    <li><span>CEO: </span> {company.ceo}</li>
                    <li><span>CTO: </span> {company.cto}</li>
                    <li><span>COO: </span> {company.coo}</li>
                    <li><span>CTO Propulsion: </span> {company.cto_propulsion}</li>
                    <li><span>Valuation: </span> {company.valuation}</li>
                  </ul>
                </div>
              </article>
            </div>

            <div className='homeWrapper2'>
              <article className='article2'>
                <h1>DRAGON</h1>
                <LineChart width={650} height={250} data={formatData(dragons)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="crew_capacity" stroke="#8884d8" />
                  <Line type="monotone" dataKey="active" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="dry_mass_kg" stroke="#ca9f82" />
                  <Line type="monotone" dataKey="dry_mass_lb" stroke="#ca8282" />
                </LineChart>
              </article>

              <article className='article3'>
                <h1>STARLINK</h1>
                <AreaChart width={650} height={250} data={datass.data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
              </article>

              <article className='article4'>
                <h1>STARSHIELD</h1>
                <BarChart width={650} height={250} data={datass.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </article>

              <article className='article5'>
                <h1>STARSHIP</h1>
                <ScatterChart
                  width={650}
                  height={250}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 10,
                    left: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="x" type="number" name="stature" unit="cm" />
                  <YAxis dataKey="y" type="number" name="weight" unit="kg" />
                  <ZAxis dataKey="z" type="number" range={[64, 144]} name="score" unit="km" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Legend />
                  <Scatter name="A school" data={datass.data04} fill="#8884d8" />
                  <Scatter name="B school" data={datass.data05} fill="#82ca9d" />
                </ScatterChart>
              </article>
            </div>
          </div>
          {/*Bottom*/}
          <div className='homeWrapper3'>
            <article className='x'>
              <PieChart width={285} height={250}>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={datass.data06}
                  cx="50%"
                  cy="70%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
              </PieChart>
            </article>

            <article className='x'>
              <PieChart width={285} height={250}>
                <Pie
                  data={datass.data07}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {datass.data07.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={datass.COLORS[index % datass.COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </article>

            <article className='x'>
              <RadialBarChart
                width={285}
                height={250}
                innerRadius="10%"
                outerRadius="130%"
                margin={0}
                cx={170}
                cy={160}
                data={datass.data03}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart', fontSize: "0.6rem" }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={5} width={120} height={140} layout='vertical' verticalAlign='middle' align="left" />
                <Tooltip />
              </RadialBarChart>
            </article>

            <article className='x'>
              <PieChart width={285} height={250}>
                <Pie data={datass.data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={datass.data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
              </PieChart>
            </article>

            <article className='x'>
              <RadarChart outerRadius={80} width={285} height={250} data={datass.dataa}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Gain" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Loss" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </article>
          </div>

        </div>
      )}
    </>
  );
}

export default Home;