import React from 'react'
import pizza33 from '../assets/pizza33.png';

const Content = () => {
  return (
     <div className='container-fluid bg1'>
        <div className='row'>
          <div className='col-12 col-sm-6 '>
            <img src={pizza33} className ="img-fluid ms-4 img1" height="400px" width="1200px" alt="not found" />
          </div>
     
      <div className='col-12 col-sm-6 '>
         <div className='frontview ps-4'>
            <h1 className='content1'>Welcome to Our</h1>
              <h1 className='content2'>Pizza paradise</h1>
                <h5 className='content3 mt-4'>Every slice is a bite of happiness!" 🍕🔥</h5>
          </div>
      </div>
    </div>
  </div>

    
  )
}

export default Content
