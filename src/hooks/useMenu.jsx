import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:5000/menus")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMenu(data);
    //     setLoading(false);
    //   });

    axios.get("http://localhost:5000/menus").then((res) => {
      setMenu(res.data);
      setLoading(false);
    });
  }, []);

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return { menu, loading, dessert, pizza, salad, soup, drinks, offered };
};

export default useMenu;
