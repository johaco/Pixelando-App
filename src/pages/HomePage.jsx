import { Header } from "../components/Header";
import { PopularProducts } from "../components/PopularProducts";

export const HomePage = () => {
  return (<>
    {/* Header */}
   <Header/>

    {/* Popular Products Section */}
    <PopularProducts/>
    
  </>
);
}