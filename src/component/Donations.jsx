import React from 'react'
// import { FormControl } from 'react-bootstra


const Donations = () => {
  return (
    <div className='px-5 py-3'>
       <p className='text-start fs-3 fw-semibold'>Donation Recipt</p>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:'12'}}>
          <div style={{display:'flex',flexDirection:'column'}}>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>             
              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Recipt No</p>
              </div>
              <div style={{flex:'3'}}>
                <input className='form-control w-75'  type="text" placeholder='032158' />
              </div>
              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Name</p>
              </div>
              <div style={{flex:'3'}}>
                <input className='form-control w-75'  type="text" placeholder='032158' />
              </div>
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              
              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Mobile No</p>
              </div>
              <div style={{flex:'3'}}>
                <input type="number" className='form-control w-75' placeholder='9988776655' />
              </div>

              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Date</p>
              </div>
              <div style={{flex:'3'}}>
                <input type="date" className='form-control w-75' placeholder='12/02/2024' />
              </div>              

            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'start'}}>
              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Address</p>
              </div>
              <div style={{flex:'3'}}>
                <textarea 
                rows={3}
                cols={23}
                className='form-control w-75'
                >

                </textarea>
              </div>
              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Payment Mode</p>
              </div>
              <div style={{flex:'3'}}>
                <select className='form-select w-75'  type="text" >
                <option selected value="cash">Cash</option>
                <option value="online">online</option>
                </select>
              </div>
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>             
              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Amount</p>
              </div>
              <div style={{flex:'3'}}>
                <input className='form-control w-75'  type="text" placeholder='032158' />
              </div>
              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Check No</p>
              </div>
              <div style={{flex:'3'}}>
                <input className='form-control w-75'  type="text" placeholder='032158' />
              </div>
            </div>
            
            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>  
            <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Check Date</p>
              </div>
              <div style={{flex:'3'}}>
                <input type="date" className='form-control w-75' placeholder='12/02/2024' />
              </div>

              <div style={{flex:'3'}}>
                <p className='fs-6 fw-semibold'>Bank Name</p>
              </div>
              <div style={{flex:'3'}}>
                <input type="text" className='form-control w-75' placeholder='Name of Bank' />
              </div>                            
            </div>

            
          </div>
          </div>
       
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: '90px',paddingTop:'30px' }}>
                <button className='btn btn-light px-4' style={{ marginRight: '10px' }}>
                   Discard
                </button>
                <button className='btn btn-primary px-4 ' style={{  borderRadius: '5px' }}>Save</button>
            </div>
        
    </div>
  )
}

export default Donations