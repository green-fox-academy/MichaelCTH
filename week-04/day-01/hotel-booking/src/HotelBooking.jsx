import React from 'react';
import Sidebar from './Sidebar';
import PropertyList from './PropertyList';
import data from './data';

export default function HotelBooking() {
  return (
    <>
      <h1>Hotel Booking</h1>
      <div className="main">
        <Sidebar items={data.filters} />
        <PropertyList items={data.hotels} />
      </div>
    </>
  );
}
