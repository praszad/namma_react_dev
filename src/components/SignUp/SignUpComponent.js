import React from 'react';

export default function SignUpComponent() {
  return (
    <div className='container'>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' className='form-control' />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Last Name</label>
        <input type='text' className='form-control' />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Mobile</label>
        <input type='text' className='form-control' />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Email</label>
        <input type='text' className='form-control' />
      </div>
    </div>
  );
}
