import style from "./App.module.scss"
import { Dashboard } from "./components/Dashboard"
import { Login } from "./components/Login"

export function App() {

  const  user  = true

  return (
   <main>
     {!!user ? <Dashboard/> : <Login/> }
   </main>
  )
}

