import { Link } from "react-router-dom";

const LinkSpan = ({ page, address, active }) => {
  return (
    <div>
      <Link to={address}>
        {active ? (
          <h1 className="App-link App-header-selected">{page}</h1>
        ) : (
          <h1 className="App-link">{page}</h1>
        )}
      </Link>
    </div>
  );
};

export default LinkSpan;