import styles from '../styles/Login.module.css'

const Login = () => {
    return (
        <div> 
             <form className={styles.loginForm} >
                 <div className = {styles.formTitle}>
                    <label>
                        <h5>EASY CONDO MANAGER</h5>
                        <hr className = {styles.line}/>  
                    </label>                  
                 </div>
                <div className = {styles.formControl}>
                    <label>Database</label>
                    <select className = {styles.databaseInput} name="database" id="database">
                        <option value="Res 1">Res 1</option>
                        <option value="Res 2">Res 2</option>
                        <option value="Res 3">Res 3</option>
                    </select>
                </div>    
                <div className = {styles.formControl}>
                    <label>Username</label>
                    <input type = 'text' placeholder = 'Enter Username' />
                </div> 
                <div className = {styles.formControl}>
                    <label>Password</label>
                    <input type = 'password' placeholder = 'Enter Password'  />
                </div> 
                <hr className = {styles.line2}/>  
               <input type = 'submit' value = 'Log in' className = {styles.btn} />  
               <p className={styles.nombres}>Alejando Acevedo, Diego Marfil, Leonardo Bigott</p> 
            </form>            
        </div>
    )
}

export default Login
