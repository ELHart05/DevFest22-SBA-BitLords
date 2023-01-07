import HeroImage from "./assets/welcomeHome.jpg";
import './style.css';

const WelcomePage = ({user}) => {
    return (
    <div className="blog-post-container welcome">
        <div className="blog-content">
            <div className="blog-content-wrapper">
                <h2>WELCOME!</h2>
                <p>Mannaging time has never been easy  with ESI TIME!</p>
                <a href={ user.email !== "" ? '/home' : '/login'} className="welcome-a">LOGIN/REGISTER <svg
                        aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right"
                        className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="white"
                            d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
        <div className="blogImg">
            <img src={HeroImage} alt="#" />
        </div>
    </div>
    )
}

export default WelcomePage;