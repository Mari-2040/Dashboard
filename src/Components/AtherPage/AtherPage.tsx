import React from "react";
import Loader from "./Loader";
function AtherPage() {
  return (
    <div>
      <div className='flex mt-1 ml-10 items-center gap-14'>
        <div className='flex space-x-4'>
          <div className='loader-item h-8 w-8 bg-blue-800 rounded-full animate-pulse'></div>
          <div className='loader-item h-8 w-8 bg-red-800 rounded-full animate-pulse'></div>
          <div className='loader-item h-8 w-8 bg-green-800 rounded-full animate-pulse'></div>
          <div className='loader-item h-8 w-8 bg-orange-800 rounded-full animate-pulse'></div>
        </div>
        <Loader />
      </div>
    </div>
  );
}
export default AtherPage;

{/* <div className='flex mx-20 my-20 gap-5 ir'>
        <div className='loader flex'>
          <div style={{ "--i": 0 }}></div>
          <div style={{ "--i": 1 }}></div>
          <div style={{ "--i": 2 }}></div>
          <div style={{ "--i": 3 }}></div>
        </div>
        <div className='card'>
          <div className='loader3'>
            <i className='fas fa-cog left1'></i>
            <i className='fas fa-cog right2'></i>
          </div>
          <div className='shadow5'></div>
        </div>
</div> */}