import optionsStyles from '../styles/Options.module.css'
import Button from './Button'

const Options = () => {
    const x = 2; 
    return (
        <div className= {optionsStyles.barra}>
            <h6 className ={optionsStyles.title}>
                <span>Solicitudes de presupuesto</span> 
                <Button />
            </h6>
            <div className = {optionsStyles.formControl}>
                <input type="text" placeholder='Buscar'/>
            </div>
              
        </div>
    )
}

export default Options