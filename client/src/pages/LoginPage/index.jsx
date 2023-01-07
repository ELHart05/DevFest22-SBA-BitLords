import HeroImage from '../../assets/auth-hero.png';
import './style.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../Redux/Slices/UserSlice';
import { CreateUser } from '../../Redux/Slices/UserSlice';

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const user = {
        email: email,
        password: password
    }
    return (
        <div className="login-container">
            <div className="form-content">
                <form onSubmit={(e) => {
                    e.preventDefault()
                }} className="login-form">
                    <p>Don't have an account?<a href='/register' className='underline'>Register</a>
                    </p>
                    <h2 className='font-bold'>Login to ESI-TIME</h2>
                    <div className="inputs">
                        <div>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope"
                                className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z">
                                </path>
                            </svg>
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email" placeholder="Email" />
                        </div>
                        <div>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock-alt"
                                className="svg-inline--fa fa-lock-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM264 392c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48zm32-168H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
                                </path>
                            </svg>
                            <input onChange={(e) => {
                                setPassword(e.target.value)
                            }} type="password" placeholder="Password" />
                        </div>
                    </div>
                    <a href='/resetpassword' className="forgett-password">Forgot your password?</a>
                    <button onClick={(e) => {
                        dispatch(userLogin(user))
                    }}>SIGN IN</button>
                </form>
            </div>
            <div className='w-1/2 hidden lg:flex'>
                <img className='w-full' src={HeroImage} alt="#" />
            </div>
        </div>
    )
}

export default LoginPage;