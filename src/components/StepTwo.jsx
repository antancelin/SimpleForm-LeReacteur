const StepTwo = ({ name, email, password, setDisplay }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <div className="infos">
        <p>
          Name : <span>{name}</span>
        </p>
        <p>
          Email : <span>{email}</span>
        </p>
        <p>
          Password : <span>{password}</span>
        </p>
      </div>
      <button
        onClick={() => {
          setDisplay(true);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
