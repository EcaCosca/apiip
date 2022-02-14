import React, { useState, useEffect } from 'react'
import { Map } from 'pigeon-maps'

export default function MyMap(props) {
  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)

  useEffect(() => {
    setCenter([props.props.lat, props.props.lng])
  }, [])

  return (
    <Map 
      height={300}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    />
  )
}