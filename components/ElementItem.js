import Link from 'next/link'
import elementStyles from '../styles/Element.module.css'

const ElementItem = ({element}) => {
    return (
        <Link href="/element/[id]" as ={`/element/${article.id}`}>
            <a className={elementStyles.card}>
                <h3>{element.title} &rarr; </h3>
                <p>{element.body}</p>
            </a>
        </Link>
    )
}

export default ElementItem
