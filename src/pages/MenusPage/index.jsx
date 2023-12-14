import React from "react";
import { useSelector } from "react-redux";

const MenusPage = () => {
  const { list } = useSelector((state) => state.menu);

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
