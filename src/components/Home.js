import "./Home.scss";
import { BsLaptop, BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";
import { BiHappyBeaming } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Home = ({ profile, skip, onSkip }) => {
  return (
    <div className="App-profile">
      <img src={profile} className="App-profile-image" alt="Profile Headshot" />
      <div
        className={`App-profile-text ${skip ? "skip-animation" : ""}`}
        onClick={onSkip}
      >
        <div>
          <div className={`typer ${skip ? "skip-animation" : ""}`}>
            <h1>Hi, my name is Andrew!</h1>
            <h2>I am a software engineer.</h2>
            <br></br>
          </div>
          <div className={`typer-1 ${skip ? "skip-animation" : ""}`}>
            <p>
              <BsLaptop color="#36454f" className="align-icon" />
              TDP Software Engineer Associate at Capital One
            </p>
          </div>
          <div className={`typer-2 ${skip ? "skip-animation" : ""}`}>
            <p>
              <SiGitbook color="#36454f" className="align-icon" />
              M.S. in Computer Science and Engineering
            </p>
          </div>
          <div className={`typer-3 ${skip ? "skip-animation" : ""}`}>
            <p>
              <BiHappyBeaming color="#36454f" className="align-icon" />
              Enjoys hikes, golf, and games in free time
            </p>
          </div>
          <div className={`typer-4 ${skip ? "skip-animation" : ""}`}>
            <p>
              <FiMail color="#36454f" className="align-icon" />
              Feel free to reach out!
            </p>
          </div>
          <br></br>
          <br></br>
          <div className={`typer-5 ${skip ? "skip-animation" : ""}`}>
            <a href="https://www.facebook.com/andrew.j.millward/">
              <BsFacebook color="#36454f" className="social-icon" />
            </a>
            <a href="https://twitter.com/AndrewJMillward">
              <BsTwitter color="#36454f" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/andrew-j-millward/">
              <FaLinkedinIn color="#36454f" className="social-icon" />
            </a>
            <a href="https://github.com/andrew-j-millward">
              <BsGithub color="#36454f" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
