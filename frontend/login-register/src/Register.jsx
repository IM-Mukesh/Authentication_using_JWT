import React from 'react';

const Register = () => {
    return (
        <div className='outer-container'>        
            <div className="register-container">
                <form action="">
                    <input type="text" placeholder='Enter-userName..'/>
                    <input type="password" placeholder='Enter password' />
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register