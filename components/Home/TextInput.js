"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import GooglePlacesAutocomplete to avoid SSR issues
const GooglePlacesAutocomplete = dynamic(() => import('react-google-places-autocomplete'), { ssr: false });

const TextInput = ({ type }) => {
  const [value, setValue] = useState(null);

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 items-center gap-4 flex'>
      <img src="https://i.pinimg.com/474x/0b/d0/33/0bd033b4d769dd5b9c095c847134c5ad.jpg" alt="" className='w-4 h-4 rounded-full' />
      {/* Google Places Autocomplete Component */}
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
          placeholder: type === 'source' ? 'Pickup location' : 'Dropoff location',
        }}
      />
    </div>
  );
}

export default TextInput;
