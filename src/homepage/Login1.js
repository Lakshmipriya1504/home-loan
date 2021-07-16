import React from 'react';
import Slider from '@material-ui/core/Slider';


 function Login1 () {
    // Our States
  const [value, setValue] =  React.useState([1]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {value[0]} /-
    </div>
  );
  }

export default Login1;