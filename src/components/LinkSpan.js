const LinkSpan = ({ page, address, active }) => {
  return (
    <div>
      <a href={address}>
        <h1 className="App-link App-header-selected">{page}</h1>
      </a>
    </div>
  );
};

export default LinkSpan;
