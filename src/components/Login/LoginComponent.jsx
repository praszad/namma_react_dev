import React from 'react';

export default function LoginComponent(params) {
  return (
    <div>
      <div className='container'>
        <form action=''>
          <div className='form-group'>
            <label htmlFor=''>
              <input type='text' className='form-element' />
            </label>
          </div>
          <div className='form-group'>
            <label htmlFor=''>
              <input type='text' className='form-element' />
            </label>
          </div>
          <div className='form-group'>
            <button type='button' className='btn btn-primary'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
