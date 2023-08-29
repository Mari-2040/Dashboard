import React, { useState } from "react";
import LibraryItem from "./LibraryItem";
import Pagin from "./Pagin";

const Atherin = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='m-6'>
        <div className='flex gap-3 items-center'>
          <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='auto_stories'>
              <g mask='url(#mask0_3_119)'>
                <path id='auto_stories_2'
                  d='M11.9808 19.8653C11.1744 19.2705 10.3077 18.8109 9.38079 18.4865C8.45385 18.1621 7.49359 18 6.50001 18C5.88976 18 5.29041 18.0676 4.70196 18.2028C4.11349 18.3381 3.54619 18.5371 3.00004 18.7999C2.64364 18.964 2.30454 18.9397 1.98274 18.7269C1.66095 18.514 1.50006 18.2128 1.50006 17.823V6.98465C1.50006 6.76926 1.55711 6.57022 1.67121 6.38752C1.78531 6.20482 1.94364 6.07181 2.14621 5.98847C2.82313 5.65899 3.52857 5.41188 4.26254 5.24715C4.9965 5.0824 5.74233 5.00002 6.50001 5.00002C7.47309 5.00002 8.42053 5.13785 9.34231 5.4135C10.2641 5.68915 11.15 6.07697 12 6.57697V18.0615C12.8436 17.5282 13.7337 17.1346 14.6702 16.8808C15.6067 16.6269 16.55 16.5 17.5 16.5C18.0744 16.5 18.5978 16.5356 19.0702 16.6067C19.5426 16.6779 20.0897 16.8102 20.7115 17.0038C20.7821 17.0231 20.8478 17.0247 20.9087 17.0086C20.9696 16.9926 21 16.9397 21 16.85V5.61927C21.1731 5.67056 21.342 5.72761 21.5067 5.79042C21.6715 5.85324 21.832 5.93208 21.9884 6.02695C22.159 6.11028 22.2868 6.23207 22.3721 6.39232C22.4574 6.55259 22.5 6.72439 22.5 6.90772V17.8038C22.5 18.1935 22.3343 18.4932 22.0029 18.7028C21.6714 18.9124 21.3179 18.9384 20.9423 18.7807C20.4025 18.5243 19.8432 18.3301 19.2644 18.198C18.6856 18.066 18.0974 18 17.5 18C16.5 18 15.5301 18.1573 14.5904 18.4721C13.6507 18.7868 12.7808 19.2512 11.9808 19.8653ZM14 15.5V6.50002L19 1.50002V11L14 15.5Z'
                  fill='#254DA1'
                />
              </g>
            </g>
          </svg>
          <div className='text-slate-900 items-center text-lg italic font-medium leading-normal uppercase'>
            საბიბლიოთეკო მომსახურება
          </div>
        </div>
        <div className='mt-4 border rounded-md bg-[#EEF0F2] flex flex-col'>
          <div>
            <h1 className='text-black items-center font-serif text-lg leading-normal font-semibold uppercase p-4 flex justify-center'>
              ლიტერატურა
            </h1>
            <div>
              {LibraryItem.map((item) => (
                <div key={item.id}className='flex justify-center p-4 items-center font-serif text-black text-lg font-normal leading-normal border-b border-[#d1d0d0]'>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagin currentPage={currentPage} onPageChange={handlePageChange}/>
    </div>
  );
};

export default Atherin;

// font-family: Noto Sans Georgian;
