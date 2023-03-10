import HeroImage from '../../assets/auth-hero.png';
import './style.css';

const RegisterPage = () => {
    return (
        <div className="forgot-password-container">
            <div className="form-content">
                <form className="forgot-password-form">
                    <p className="back">Back to <a href='/login' className='underline'>Login</a></p>
                    <h2 className='font-bold'>Reset Password</h2>
                    <p className="forgot-content">Forgot your passowrd? Enter your email to reset it</p>
                    <div className="inputs">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope"
                            className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z">
                            </path>
                        </svg>
                        <input type="email" placeholder="Email" />
                    </div>
                    <button>RESET</button>
                </form>
            </div>
            <div className='w-1/2 hidden lg:flex'>
                <img className='w-full' src={HeroImage} alt="#" />
            </div>
    </div>
    )
}

export default RegisterPage;