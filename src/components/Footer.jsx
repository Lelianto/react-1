import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FooterSection = () => {
  const user = useSelector((state) => state.userReducer.user);
  const product = useSelector((state) => state.productReducer);

  return (
    <div className="w-full bg-rose-200 sticky bottom-0 z-50">
      <div className="flex items-center p-4 container m-auto">
        <div className="font-bold">
          <Link to="/">Home</Link>
        </div>
        {product?.showProduct ? (
          <div className="ml-4 font-bold">
            <Link to="/product">Product</Link>
          </div>
        ) : (
          <></>
        )}
        {user?.name && <div className="ml-4 font-bold">{user.name}</div>}
      </div>
    </div>
  );
};

export default FooterSection;
