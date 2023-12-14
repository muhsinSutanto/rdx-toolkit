import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/features/counter/couterSlice";

const HomePage = () => {
  const { value } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleMinus = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>home page</h1>
      <p>counter: {value}</p>
      <div>
        <button onClick={handleAdd}>tambah</button>
        <button onClick={handleMinus}>kurang</button>
      </div>
    </div>
  );
};

export default HomePage;
