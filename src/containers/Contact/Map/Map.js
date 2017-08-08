import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'

Map.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  zoom: PropTypes.number.isRequired
}

Map.defaultProps = {
  apiKey: process.env.REACT_APP_GAPI_KEY,
  center: {
    lat: 38.7781517,
    lng: -77.160154
  },
  zoom: 17
}

export default function Map(props) {
  return (
    <div className={props.className}>
      <GoogleMap
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        bootstrapURLKeys={{key: props.apiKey}}
      />
    </div>
  )
}
