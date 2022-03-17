import React from 'react'

function Keypad() {
    function handleChange(event) {
        console.log(`Entering password...`);
      }
  return (
    <div>Keypad
        <input
        onChange={handleChange}
        type="password"
        />
    </div>
  )
}

export default Keypad