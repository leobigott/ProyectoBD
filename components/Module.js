import moduleStyles from '../styles/Module.module.css'
import Image from 'next/image'

const Module = () => {
    return (<div className={moduleStyles.option} onClick = {()=>{
        window.location.href = '/elements'
    }}>
        <div className={moduleStyles.image}>
            <Image src='/lista.png' alt='list' width={64} height={64}/>
        </div>
        <div className={moduleStyles.text}>
            <span>Elementos</span>
        </div>

    </div>
        

    )
}

export default Module
