import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  // untuk menambahkan nama input
  const [name, setName] = useState("");

  // untuk mengambil data
  const [users, setUsers] = useState(data);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // jika tidak ada nilai, jangan lakukan apa"
    if (!name) return;

    // jika nilai, setup new user dan menambahkan ke users saat ini
    const fakeId = Date.now();

    const newUsers = { id: fakeId, name };
    const updateUsers = [...users, newUsers];
    setUsers(updateUsers);

    // buat imput name nya kosong kembali
    setName("");
  };

  // handle remove
  const handleRemove = (id) => {
    const updateUsers = users.filter((person) => person.id !== id);
    setUsers(updateUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <button
              type="button"
              className="btn"
              onClick={() => handleRemove(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
