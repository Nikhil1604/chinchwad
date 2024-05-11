import React from 'react'

const Sales = () => {
  return (
    <div className='px-5 py-3'>
      <p className='text-start fs-3 fw-semibold'>Sales Report</p>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{flex:'6'}}>
          <div style={{display:'flex',flexDirection:'column'}}>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Mobile No</p>
              </div>
              <div style={{flex:'6'}}>
                <input className='form-control w-75'  type="text" placeholder='032158' />
              </div>              
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Recipt No</p>
              </div>
              <div style={{flex:'6'}}>
                <input type="text" className='form-control w-75' placeholder='03255' />
              </div>              
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Name</p>
              </div>
              <div style={{flex:'6'}}>
                <input type="text" className='form-control w-75' placeholder='Name' />
              </div>              
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Item Category</p>
              </div>
              <div style={{flex:'6'}}>
              <select className='form-select w-75'  type="text" >
                <option selected value="cash">Cash</option>
                <option value="online">online</option>
                </select>
              </div>              
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Quantity</p>
              </div>
              <div style={{flex:'6'}}>
                <input type="text" className='form-control w-75' placeholder='032158' />
              </div>              
            </div>

          </div>
        </div>
        <div style={{flex:'6'}}>
          <div style={{display:'flex', flexDirection:'column'}}>
            
          <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'start'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Address</p>
              </div>
              <div style={{flex:'6'}}>
                <textarea 
                rows={3}
                cols={23}
                className='form-control w-75'
                >

                </textarea>
              </div>
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Date</p>
              </div>
              <div style={{flex:'6'}}>
                <input type="date" className='form-control w-75' placeholder='cash' />
              </div>
            </div>
            
            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Payment Mode</p>
              </div>
              <div style={{flex:'6'}}>
              <select className='form-select w-75'  type="text" >
                <option selected value="cash">Cash</option>
                <option value="online">online</option>
                </select>
              </div>
            </div>

            

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center',}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>item Name</p>
              </div>
              <div style={{flex:'6'}}>
                <input type="text" className='form-control w-75' placeholder='cash' />
              </div>
            </div>
          </div>
          
        </div>
      </div>

        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',paddingTop:'20px',paddingBottom:'2px'}}>
        {/* table */}
        <div style={{flex:'6',justifyContent:'center'}}>
            <table style={{border:'1px solid black',margin:'10px'}}>
                    <thead style={{border:'1px solid black'}}>
                      <tr style={{border:'1px solid black'}}>
                        <th style={{padding:'20px 20px',border:'1px solid black'}}>Items</th>
                        <th style={{padding:'20px 20px',border:'1px solid black'}}>Category</th>
                        <th style={{padding:'20px 20px',border:'1px solid black'}}>Quantity</th>
                        <th style={{padding:'20px 20px',border:'1px solid black'}}>Goods Amount</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{border:'1px solid black'}}>
                        <th style={{padding:'20px 20px',textAlign:'center',border:'1px solid black'}}>Chain</th>
                        <td style={{padding:'20px 20px',textAlign:'center',border:'1px solid black'}}>Gold</td>
                        <td style={{padding:'20px 20px',textAlign:'center',border:'1px solid black'}}>1</td>
                        <td style={{padding:'20px 20px',textAlign:'center',border:'1px solid black'}}>Rs 5000/- </td>
                        
                      </tr>


                    </tbody>
                    <tfoot  >
                      <tr >
                        <th style={{textAlign:'center'}}>Grand Total</th>
                      </tr>
                    </tfoot>
            </table>
        </div>
        
        <div style={{flex:'6',paddingTop:'15px'}}>
            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Check No</p>
              </div>
              <div style={{flex:'6'}}>
                <input className='form-control w-75'  type="text" placeholder='032158' />
              </div>              
            </div>
            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Bank Name</p>
              </div>
              <div style={{flex:'6'}}>
                <input className='form-control w-75'  type="text" placeholder='032158' />
              </div>              
            </div>

            <div className='py-1' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{flex:'6'}}>
                <p className='fs-6 fw-semibold'>Check Date</p>
              </div>
              <div style={{flex:'6'}}>
                <input className='form-control w-75'  type="date" placeholder='032158' />
              </div>              
            </div>

        </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: '90px' }}>
                <button className='btn btn-light px-4 py-2' style={{ marginRight: '10px' }}>
                   Discard
                </button>
                <button className='btn btn-primary px-4 py-2' style={{  borderRadius: '5px' }}>Save</button>
        </div>

    </div>
  )
}

export default Sales