import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menus", "item"],
    queryFn: async () => {
      const res = await axiosPublic("/menus");
      return res.data;
    },
  });

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return {
    menu,
    loading,
    refetch,
    dessert,
    pizza,
    salad,
    soup,
    drinks,
    offered,
  };
};

export default useMenu;
