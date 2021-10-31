import style from "./style.module.scss"
import { BsLock, BsMailbox } from 'react-icons/bs'

export function LoginBox() {

  return (
       <div className={style.LoginBoxWrapper}>
           <strong>Register Products</strong>

           <form action="" className={style.FormLogin}>
      
           <p>
           <BsMailbox size={24} className={style.Icon}/>
           <input type="text" placeholder="Email" />
           </p>
           <BsLock size={24} className={style.Icon}/>
            <input type="password" placeholder="Password" />

            <div className="login-btns">
              <button type="submit" className={style.LoginButton}>Login</button>
              <button className={style.SignInButton}>SignIn</button>
            </div>

           </form>
       </div>
  )
}