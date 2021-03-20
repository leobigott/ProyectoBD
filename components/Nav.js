import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li onClick = {()=>{
                    window.location.href = '/modules'
                }}>
                        <i className="fas fa-th"></i>    
                </li>
                <li>
                    <Link href='/elements'>Compra</Link>
                </li>
            </ul>       
        </nav>
    )
}


export default Nav
