const LinkSpan = ({ page, address, active }) => {
  return (
    <div className="App-header-selected">
      <a href={address}>
        <h1 className="App-link App-header-selected">{page}</h1>
      </a>
    </div>
  );
};

export default LinkSpan;
