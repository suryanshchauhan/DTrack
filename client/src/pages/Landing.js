import { Logo } from "../components";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav className="logo">
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking </span>Application
          </h1>
          <p>
            DTrack is a web application designed to help job seekers track their
            job applications throughout the job search process. With DTrack,
            users can easily log and organize all of their job applications in
            one place, allowing them to stay on top of their progress and never
            miss an opportunity.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img
          src={main}
          alt="DTrack landing page picutre"
          className="img main-img"
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
