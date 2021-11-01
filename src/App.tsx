import style from "./App.module.scss"
import { HomePage } from "./components/homepage"
import { LoginBox } from "./components/loginBox"

export function App() {

  const  user  = true

  return (
   <main className={style.contentWrapper}>
     {!!user ? <HomePage/> : <LoginBox/> }
   </main>
  )
}

