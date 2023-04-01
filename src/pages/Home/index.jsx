import React, { useEffect } from "react";
import TopProducts from "../../components/category/TopProducts/TopProducts";
import HotDeals from "../../components/category/HotDeals";
import NewProducts from "../../components/category/NewProducts/NewProducts";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopProducts />
      <HotDeals />
      <NewProducts />
    </div>
  );
};

export default Home;
