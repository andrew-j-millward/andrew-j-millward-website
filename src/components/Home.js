import { BsLaptop } from "react-icons/bs";
import { SiGitbook } from "react-icons/si";
import { BiHappyBeaming } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const Home = ({ profile }) => {
  return (
    <div className="App-profile">
      <img src={profile} className="App-profile-image" alt="Profile Headshot" />
      <div className="App-profile-text">
        <div>
          <div className="typer">
            <h1>Hi, my name is Andrew!</h1>
            <h2>I am a software engineer.</h2>
            <br></br>
          </div>
          <div className="typer-1">
            <p>
              <BsLaptop color="#36454f" className="align-icon" />
              TDP Software Engineer Associate at Capital One
            </p>
          </div>
          <div className="typer-2">
            <p>
              <SiGitbook color="#36454f" className="align-icon" />
              M.S. in Computer Science and Engineering
            </p>
          </div>
          <div className="typer-3">
            <p>
              <BiHappyBeaming color="#36454f" className="align-icon" />
              Enjoys hikes, golf, and games in free time
            </p>
          </div>
          <div className="typer-4">
            <p>
              <FiMail color="#36454f" className="align-icon" />
              Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
