import { GrPersonalComputer } from "react-icons/gr";
import { SiGitbook } from "react-icons/si";

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
              <GrPersonalComputer className="align-icon" />
              TDP Software Engineer Associate at Capital One
            </p>
          </div>
          <div className="typer-2">
            <p>
              <SiGitbook color="black" className="align-icon" />
              M.S. in Computer Science and Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
