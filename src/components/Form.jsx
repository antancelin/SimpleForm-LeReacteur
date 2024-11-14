const Form = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  setDisplay,
}) => {
  return (
    <div className="form">
      <h2>Create account</h2>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          placeholder="Jean Dupont"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
        <p>Email</p>
        <input
          type="mail"
          placeholder="jeandupont@lereacteur.io"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <p>Password</p>
        <input
          className={password !== confirmPassword ? "red-border" : ""}
          type="password"
          placeholder="AzErTy2024"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <p>Confirm your Password</p>
        <input
          className={password !== confirmPassword ? "red-border" : ""}
          type="password"
          placeholder="AzErTy2024"
          name="password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          value={confirmPassword}
        />
        {password === confirmPassword ? (
          <button
            onClick={() => {
              setDisplay(false);
            }}
          >
            Register
          </button>
        ) : (
          <button>Register</button>
        )}
      </form>
    </div>
  );
};

export default Form;
