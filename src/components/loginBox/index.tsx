import style from "./style.module.scss"

export function LoginBox() {

  return (
       <div className={style.LoginBoxWrapper}>
           <strong>Register Products</strong>

           <form action="" className={style.FormLogin}>

           <p>
           <input type="text" placeholder="Email" />
           </p>
            <input type="password" placeholder="Password" />

            <div className="login-btns">
              <button type="submit" className={style.LoginButton}>Login</button>
              <button className={style.SignInButton}>SignIn</button>
            </div>

           </form>
       </div>
  )
}