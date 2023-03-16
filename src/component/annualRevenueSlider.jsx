import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const marks = {
  0: '0€',
  100000: '100k€',
  500000: '500K€',
};

const AnnualRevenueSlider = () => {
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(formatInputValue(annualRevenue));
  }, [annualRevenue]);

  const handleSliderChange = (value) => {
    setAnnualRevenue(value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setAnnualRevenue(parseFloat(inputValue.replace(/\D/g, '')));
  };

  const formatInputValue = (value) => {
    return `${(value).toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} €`;
  };

  return (
    <div>
      <Slider
        value={annualRevenue}
        onChange={handleSliderChange}
        step={1000}
        marks={marks}
        min={0}
        max={500000}
      />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default AnnualRevenueSlider;
