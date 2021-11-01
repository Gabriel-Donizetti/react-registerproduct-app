import { Menu } from "../menu"
import style from "./style.module.scss"

export function HomePage() {

  return (
   <main className={style.contentWrapper}>
       <div>
         <Menu/>
       </div>
   </main>
  )
}