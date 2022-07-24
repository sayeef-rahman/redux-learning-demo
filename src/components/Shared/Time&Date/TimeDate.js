import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const TimeDate = () => {
  const todayMonthDate = new Date();
  const date = todayMonthDate.getDate();
  const month = todayMonthDate.getMonth();
  const year = todayMonthDate.getFullYear();

  const useMonthDate = (month, date) => {
    switch (month) {
      case 0:
        return ['January', date];
      case 1:
        return ['February', date];
      case 2:
        return ['March', date];
      case 3:
        return ['April', date];
      case 4:
        return ['May', date];
      case 5:
        return ['June', date];
      case 6:
        return ['July', date];
      case 7:
        return ['August', date];
      case 8:
        return ['September', date];
      case 9:
        return ['October', date];
      case 10:
        return ['November', date];
      case 11:
        return ['December', date];

      default:
        return month;
    }
  };
  const MonthDate = useMonthDate(month, date);
  console.log('using function: ', MonthDate[0]);

  return (
    // <div className=''>
    //   <select class='form-select w-25 mx-auto' aria-label='Default select example'>
    //     <option value='1' className='d-flex flex-column'>
    //       <p className='text-uppercase'>Tomorrow </p>
    //       <p>{MonthDate[1]} {MonthDate[0]}</p>
    //       </option>
    //     <option value='2'>{MonthDate[1]+1} {MonthDate[0]}</option>
    //     <option value='3'>{MonthDate[1]+2} {MonthDate[0]}</option>
    //   </select>
    //   <select class='form-select w-25 mx-auto' aria-label='Default select example'>
    //     <option selected>Open this select menu</option>
    //     <option value='1'>One</option>
    //     <option value='2'>Two</option>
    //     <option value='3'>Three</option>
    //   </select>

    // </div>
    <div>
      {/* date */}
      <div className='date-section border'>
        {/* Date Section */}
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <p className='m-0 p-0 fw-bold' style={{ fontSize: '10px' }}>
              Today
            </p>
            <p>24 July</p>
          </div>
          <div>
            <button className='border-0 bg-white m-2'>
              <FaArrowDown></FaArrowDown>
            </button>
          </div>
        </div>
        {/* Date section End */}
      </div>

      {/* time statr */}
      <div className='d-flex justify-content-center align-items-center'>
        <div>
          <p className='m-0 p-0' >10.00 AM - 11.00 AM</p>
        </div>
        <div>
          <button className='border-0 bg-white m-2'>
            <FaArrowDown></FaArrowDown>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeDate;
