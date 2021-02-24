import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getWeather } from '../../features/weather/weatherSlice'
import './Weather.less'

const kelvinToFahrenheit = k => (k - 273.15) * 9/5 + 32

const Weather = ({ weather, getWeather }) => {
  const kTemp = _.get(weather, ['data', 'main', 'temp'])
  const fTemp = kTemp ? kelvinToFahrenheit(kTemp).toFixed(2) : null
  return (
    <div className='weather-container'>
      <div className='title'> { fTemp ? `${fTemp} degrees Fahrenheit`: 'No weather data' }</div>
      <div className='data'>
        <button onClick={() => getWeather('Boston')}> Get Weather for Boston </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ 
  weather: state.weather 
})

const mapDispatchToProps = {
  getWeather,
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)