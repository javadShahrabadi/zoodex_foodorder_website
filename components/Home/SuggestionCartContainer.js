import SuggesstionCart from "./SuggesstionCart";
const SuggestionCartContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 justify-self-center gap-x-2 gap-y-4">
      <SuggesstionCart
        image="https://cdn.mobit.site/get/zoodex/StoreAttribute/2809/zoodex-4914660-borjburger.jpg?inline=1"
        title="
        برج برگر
      "
        score="۴.۳"
        status="close"
        off=""
      />
      <SuggesstionCart
        image="https://cdn.mobit.site/get/zoodex/StoreAttribute/2436/zoodex-4558633-1b7303af.jpg?inline=1"
        title="
        رستوران آ اس پ
      "
        score="۴.۱"
        status="close"
        off="۱۰"
      />
      <SuggesstionCart
        image="https://cdn.mobit.site/get/zoodex/StoreAttribute/1937/zoodex-7148489-4806d6aa43d5acb5eea03d30ea3fbb2b.jpg?inline=1"
        title="
        کباب سرای خوب من
      "
        score="۳.۷"
        status="close"
        off=""
      />
      <SuggesstionCart
        image="https://cdn.mobit.site/get/zoodex/StoreAttribute/2580/zoodex-9429621-Koobideh-khorak-classic.jpg?inline=1"
        title="
        کافه کباب CRC
      "
        score="۴.۸"
        status="close"
        off=""
      />
      <SuggesstionCart
        image="https://cdn.mobit.site/get/zoodex/StoreAttribute/2829/zoodex-8276244-shininnnn.jpg?inline=1"
        title="
        شیرین منش
      "
        score="۵"
        status="close"
        off=""
      />
      <SuggesstionCart
        image="https://cdn.mobit.site/get/zoodex/StoreAttribute/1815/zoodex-3513694-Decoration-Iranian-foods-3.jpg?inline=1"
        title="
        رستوران سران
      "
        score="۴.۵"
        status="close"
        off=""
      />
    </div>
  );
};

export default SuggestionCartContainer;
