import React, { useState } from 'react';

const PriceRangeSlider = () => {
  const [maxValue, setMaxValue] = useState(2500);

  const handleMaxChange = (event:any) => {
    setMaxValue(parseInt(event.target.value));
  };

  return (
    <>
        <div className="w-[80%] flex items-center justify-between pb-[12px]">
            <p className="text-[18px] text-extraclr1 font-medium">Min</p>
            <p className="text-[18px] text-extraclr1 font-medium">Max</p>
        </div>
        <div className="w-[80%] relative">
        <input
            type="range"
            min="0"
            max="2500"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-full h-[3px] appearance-none bg-sc rounded-full outline-none thumb-black cursor-pointer"
            
            
        />
        <div className="absolute top-[4px] left-0 bottom-0 my-autotransform  bg-black w-[20px] h-[20px] rounded-full"></div>

        <div className="relative">
            <div className="absolute px-[10px] py-[7px] rounded-[5px] left-0 top-[20px] bg-#F4F5F7 text-cardpara shadow-cardshadow">$0</div>
            <div className="absolute px-[10px] py-[7px] rounded-[5px] right-0 top-[20px] bg-#F4F5F7 text-cardpara shadow-cardshadow">${maxValue}</div>
        </div>
    </div>
    </>
  );
};

export default PriceRangeSlider;
