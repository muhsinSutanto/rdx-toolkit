import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/features/counter/couterSlice";
import { postRegister } from "../../redux/features/register/registerSlice";

const HomePage = () => {
  const { value } = useSelector((state) => state.counter);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleMinus = () => {
    dispatch(decrement());
  };

  const handleRegister = () => {
    const payload = {
      name: name,
      username: username,
      password: password,
      roleId: 1,
    };

    dispatch(postRegister(payload));
  };

  return (
    <div>
      <h1>home page</h1>
      <p>counter: {value}</p>
      <div>
        <button onClick={handleAdd}>tambah</button>
        <button onClick={handleMinus}>kurang</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>register</button>
      </div>
    </div>
  );
};

export default HomePage;
