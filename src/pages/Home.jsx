/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dummyProducts } from "src/utils/dummy";
import { getUserData } from "src/store/apis";
import { getUser } from "src/store/actions/user";
import { getIsProductShow } from "src/store/actions/product";
import PageLayout from "src/components/Layout";
import ProductList from "src/components/Products";

const Home = () => {
  const datas = dummyProducts;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.showProduct);

  const getUserProfile = async () => {
    const response = await getUserData("Lelianto");
    if (response.name) {
      dispatch(getUser(response));
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleShowProduct = useCallback(() => {
    if (product) {
      dispatch(getIsProductShow(false));
    } else {
      dispatch(getIsProductShow(true));
    }
  }, [product]);

  return (
    <>
      <PageLayout>
        <button
          className="bg-black text-white rounded-lg px-4 py-2 my-8 ml-4"
          type="button"
          onClick={handleShowProduct}
        >
          {product ? "Hide" : "Show"} Product
        </button>
        <ProductList datas={datas} />
      </PageLayout>
    </>
  );
};

export default Home;
