
import React from 'react';
import { useSelector } from 'react-redux';

export default function FirstResultedValue() {
  const selector = useSelector((state) => state.count); // Ensure correct path

  return (
    <div>
      {console.log(selector)} {/* Debugging */}
      <h1>{selector}</h1>
      <p>{selector}</p>
    </div>
  );
}
