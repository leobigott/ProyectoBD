import ElementItem from './ElementItem'
import Styles from '../styles/Element.module.css'

export const ElementList = ({elements}) => {
    return (
        <div className={Styles.grid}>
            {elements.map(element => 
            <ElementItem element = {element}/>
            )}  
                    
        </div>
    )
}

export default ElementList;
