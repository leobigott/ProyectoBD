import styles from '../styles/NewForm.module.css'

const NewForm = () => {
    return (
        <div>
            <form className={styles.form} onSubmit = {onSubmit} >
            <div className = {styles.title}>
                <label>Solicitud de presupuesto</label>
            </div>    
            <div className = {styles.subTitle}>
                <label>
                    <h3>New</h3>
                </label>
            </div> 
            <div className = {styles.control}>
                <label className={styles.label}>Proveedor</label>
                <input className = {styles.input} type = 'text' placeholder = 'Name, TIN, Email, or Reference' />
            </div>  
            <div className = {styles.control}>
                <label className={styles.label}>Referencia de proveedor</label>
                <input className = {styles.input} type = 'text' placeholder = '' />
            </div>  
            <div className = {styles.control2}>
                <label className={styles.label2}>Fecha de Entrega</label>
                <input className = {styles.input2} type = 'date' placeholder = '01/01/21' />
            </div>  

            <input type = 'submit' value = 'Guardar' className = {styles.btn} />   
        </form>
            
        </div>
    )
}

export default NewForm
