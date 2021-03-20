import optionsStyles from '../styles/Options.module.css'
import Button from './Button'
import Button2 from './Button2'

const OptionsNew = () => {
    return (
        <div>
        <div className= {optionsStyles.barra}>
            <h6 className ={optionsStyles.newTitle}>
                <p className={optionsStyles.text}>Solicitudes de presupuesto</p>
                <p className={optionsStyles.new}> / Nuevo</p> 
            </h6>
            <h6 className ={optionsStyles.newBtn}>
                <Button  />
                <div className ={optionsStyles.btn2}>
                <Button2 />
                </div>
                
                </h6>
 
            <div className = {optionsStyles.formControl}>
                <input type="text" placeholder='Buscar'/>
            </div>
              
        </div>
            
        </div>
    )
}

export default OptionsNew;
