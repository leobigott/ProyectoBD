import btn2Styles from '../styles/Btn2.module.css'
import Link from 'next/link'

const Button2 = () => {
    return (
        <div>
            
            <Link href="/elements">
                <span className = {btn2Styles.btn}>Descartar</span>
            </Link>
            
        </div>
    )
}

export default Button2
