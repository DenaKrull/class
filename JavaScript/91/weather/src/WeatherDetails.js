import React from 'react'
import PropTypes from 'prop-types';

// export default function WeatherDetails(props) {
//   const { city, icon, details } = props.weather;
export default function WeatherDetails({ weather: { city, icon, details } }) {

  return (
    <>
      <div>
        <div className="row ">
          <div>The weather in {city} is currently</div>
        </div>
        <div className="row ">
          <img className="col-3 mx-auto" alt='' src={icon} />
        </div>
        <div className="row ">
          <div >{details}</div>
        </div>
      </div>
    </>
  )
}

WeatherDetails.prototypes = {
  weather: PropTypes.exact({
    city: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired
  }).isRequired

};