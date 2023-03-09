import { Link } from "react-router-dom";
const HeaderSection = (props) => {
  return (
    <div className="w-full bg-rose-200 sticky top-0 z-50">
      <div className="flex items-center p-4 container m-auto">
        <div className="font-bold">
          <Link to="/">Home</Link>
        </div>
        {props.showProduct ? (
          <div className="ml-4 font-bold">
            <Link to="/product">Product</Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
