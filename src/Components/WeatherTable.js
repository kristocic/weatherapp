import React from 'react';

const WeatherTable = ({ dailyData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Sunrise</th>
          <th>Sunset</th>
          <th>Temperature (°C)</th>
          <th>Precipitation (mm)</th>
          <th>Wind Speed (m/s)</th>
          
        </tr>
      </thead>
      <tbody>
        {dailyData.map((dailyData) => (
          <tr key={dailyData.dailyData}>
            <td>{dailyData.date}</td>
            <td>{dailyData.sunrise}</td>
            <td>{dailyData.sunset}</td>
            <td>{dailyData.temperature}</td>
            <td>{dailyData.precipitation}</td>
            <td>{dailyData.windSpeed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
