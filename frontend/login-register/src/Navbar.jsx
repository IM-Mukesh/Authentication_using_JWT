import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <h1>Navbar</h1>
                </div>
                <div className='pages'>
                    <Link to="/"><button>Login</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar