import { Link } from "react-router-dom";
import error404 from "../assets/images/404.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={error404} alt="not found" />
        <h3>We couldn't find this page!</h3>
        <p>Maybe it's out there, somewhere...</p>
        <Link to="/landing">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
