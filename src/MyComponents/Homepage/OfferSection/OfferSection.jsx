import React from 'react'
import { OfferData } from '../../../ArrayData/ArrayData'

const OfferSection = () => {
  return (
    <>
      <div className="hidden md:grid grid-cols-3 mx-3 ">
          {OfferData.map((e)=>{
              return(
                <div className='mx-4'><img src={e.img} alt="" /></div>
              )
          })}
            
      </div>
    </>
  )
}

export default OfferSection
