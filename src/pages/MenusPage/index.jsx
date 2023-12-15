import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMenu } from "../../redux/features/menu/menuSlice";

const MenusPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  if (loading)
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );

  return (
    <div>
      <h1>menus page</h1>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenusPage;
