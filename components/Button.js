import btnStyles from '../styles/Button.module.css'
import Link from 'next/link'

const Button = () => {

    return <div className = {btnStyles.btn}>
                <Link href = '/newElement'>CREAR</Link>
                
            </div>
}

export default Button;