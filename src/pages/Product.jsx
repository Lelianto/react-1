import PageLayout from "src/components/Layout";
import { dummyProducts } from "src/utils/dummy";
import ProductList from "src/components/Products";

const ProductPage = () => {
  const datas = dummyProducts;
  return (
    <>
      <PageLayout>
        <ProductList datas={datas} />
      </PageLayout>
    </>
  );
};

export default ProductPage;
