import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import style from './style.module.scss'

type Category = {
    category: string
}

export function Menu(){

    const [categorys, setCategorys] = useState<Category[]>([])

    useEffect(() => {
        api.get('product/categorys').then(response => {
            setCategorys(response.data)
        })
        console.log(categorys)
    }, [])

    return(
        <nav className={style.navbar}>
            <h4><i className="fas fa-cogs"></i>Dashboard</h4>
            <ul className={style.categoryList}>
                {categorys?.map(category => {
                    return(
                        <li key={category.category}>
                            <i className="fab fa-product-hunt"></i>{category.category}
                        </li>
                    )
                })}
            </ul>
            <button>
                <span>Sign Out</span>
                <i className="fas fa-sign-out-alt"></i>
            </button>
        </nav>
    )
}