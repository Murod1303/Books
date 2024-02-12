import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Search } from "../Search/Search";
export const TopHeader = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Search />
    </div>
  );
};
