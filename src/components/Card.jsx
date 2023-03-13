const Card = (props) => {
  return (
    <div className="p-4 w-full bg-white shadow-md rounded-xl">
      <picture className="rounded-lg block overflow-hidden">
        {props.image && (
          <img
            className="w-full hover:scale-125"
            src={props.image}
            alt="gambar-custom"
          />
        )}
      </picture>
      <h1 className="mt-4 mb-2 text-xl font-bold">{props.title}</h1>
      <p className="text-sm text-gray-600">{props.subtitle}</p>
    </div>
  );
};

export default Card;
