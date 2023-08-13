import { useState } from "react";

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(null);
  // const toggleAlert = () => {
  //   // True
  //   if (showAlert) {
  //     setAlert(false);
  //     return;
  //   }
  //   // False
  //   setAlert(true);
  // };

  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setAlert(!alert)}>
        Alert
      </button>
      {alert && <Alert />}
    </>
  );
};

const Alert = () => {
  return (
    <>
      <h2 className="alert alert-danger">Alert</h2>
    </>
  );
};

export default ToggleChallenge;
