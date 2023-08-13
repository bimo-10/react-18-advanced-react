import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // Normally connect to db or api
    setUser({ name: "Susan" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h2>Hello there, {user.name}</h2>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
