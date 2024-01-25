import {Link} from 'react-router-dom'
import './index.css'

const Header = () =>{
    return(
        <>
        <nav className='navbar'>
            <div className='logoContainer'>
                <h1 className='logo-title'>Madelyn Torff</h1>
            </div>
            <ul className='menu'>
                <Link to="/" className='menu-link'>
                    <li className='about'>About</li>
                </Link>
                <Link to="/projects" className='menu-link'>
                    <li className='project'>Projects</li>
                </Link>
                <Link to="/contacts" className='menu-link'>
                    <li className='contact'>Contacts</li>
                </Link>
            </ul>
        </nav>
        </>
    )
}

export default  Header