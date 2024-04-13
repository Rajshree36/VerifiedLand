import React from 'react'

const ImageCard = (props) => {
const {landData} =props;
// const {
//     village_name,
//     mandal_name,
//     district_name,
//   } = landData;

  return (
    <div className='image-card'> 
        <img className='land-img'
         alt="land-logo" src='https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_1_ub5dps'></img>
     <div className='land-info'>
      <h3>{landData.village_name},{landData.mandal_name}<br />{landData.district_name}(dt)</h3>
      <img className="tick-image"alt='verified'src='https://1acre.in/static/images/icons/blue-check.svg'></img>
      </div>
      <div className='details'>
       <p><b>{landData.total_land_size_in_acres.acres!==0?landData.total_land_size_in_acres.acres+ " Acres.":landData.total_land_size_in_acres.guntas + " Guntas."}</b> ₹ {landData.price_per_acre_crore.crore !==0 ?landData.price_per_acre_crore.crore + " crores for full property" :landData.price_per_acre_crore.lakh + " per acre"} </p>
      </div>
    </div>
    
  );
}

export default ImageCard;
