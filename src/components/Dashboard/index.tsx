import { Menu } from "../Menu"
import { NewProduct } from "../NewProduct"
import { Products } from "../Products"
import style from "./style.module.scss"

export function Dashboard() {

  return (
   <main id={style.dashboard}>
         <Menu/>
         <Products />
         <NewProduct />
   </main>
  )
}