import React from 'react';
const Login = () => {
    return (
        <div className='outer-container'>
            <div className="login-container">
                <form action="">
                    <input type="text" placeholder='Enter-userName..'/>
                    <input type="password" placeholder='Enter password' />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login