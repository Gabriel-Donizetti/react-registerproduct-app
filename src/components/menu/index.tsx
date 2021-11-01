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
        <main>
            <div className={style.contentWrapper}>
                <strong className={style.Title}>Register Product</strong>
                <strong className={style.Categorys}>Category</strong>
                <ul className={style.categoryList}>
                   {categorys?.map(category => {
                       return(
                           <li>
                               <button key={category.category} className={style.buttonFilter}>
                                   {category.category}
                               </button>
                           </li>
                       )
                   })}
                </ul>
            </div>
        </main>
    )
}