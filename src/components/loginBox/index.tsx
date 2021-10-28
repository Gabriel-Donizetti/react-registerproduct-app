import style from "./style.module.scss"

export function LoginBox() {

  return (
       <div className={style.LoginBoxWrapper}>
           <strong>Register Products</strong>

           <form action="" className={style.FormLogin}>

            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className={style.LoginButton}>Login</button>
            <button className={style.SignInButton}>SignIn</button>
           
           </form>
       </div>
  )
}