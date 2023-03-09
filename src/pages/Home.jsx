import { useCallback, useEffect, useState } from "react";
import Card from "src/components/Card";
import HeaderSection from "src/components/Header";
import { dummyProducts } from "src/utils/dummy";

const Home = () => {
  const datas = dummyProducts;
  const [showProduct, setShowProduct] = useState(false);

  useEffect(() => {
    console.log(showProduct);
  }, [showProduct]);

  const handleShowProduct = useCallback(() => {
    if (showProduct) {
      setShowProduct(false);
    } else {
      setShowProduct(true);
    }
  }, [showProduct]);

  return (
    <>
      <HeaderSection showProduct={showProduct} />
      <button
        className="bg-black text-white rounded-lg px-4 py-2 my-8 ml-4"
        type="button"
        onClick={handleShowProduct}
      >
        {showProduct ? "Hide" : "Show"} Product
      </button>
      <div className="w-full container px-4 m-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {datas.map((data, index) => {
            return (
              <div key={`product-${index}`}>
                <Card
                  image={data.image}
                  title={data.title}
                  subtitle={data.subtitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
