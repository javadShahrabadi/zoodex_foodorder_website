import Image from "next/image";

// ------------------------------

const WhyCart = (props) => {
  return (
    <div className="flex flex-col items-center px-2 py-8 border border-gray-100 rounded-xl shadow-md">
      <div className="w-[76px] h-[76px] mr-10">
        <Image src={props.image} alt={props.title} width={40} height={40} />
      </div>
      <div>
        <h3 className="text-gray-600 font-semibold text-center">
          {props.title}
        </h3>
        <p className="text-gray-500 text-sm text-center pt-6">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default WhyCart;
