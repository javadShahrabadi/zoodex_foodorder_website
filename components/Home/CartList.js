import CartItem from "./CartItem";

const CartList = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-stretch px-4 lg:px-0 gap-y-4 gap-x-2">
      <CartItem thumbnail="/icons/resturant.png" title="رستوران" />
      <CartItem thumbnail="/icons/pizza.png" title="فست فود" />
      <CartItem thumbnail="/icons/coffeeshop.png" title="کافی شاپ" />
      <CartItem thumbnail="/icons/bread.png" title="نانوایی" />
    </div>
  );
};
export default CartList;
