import React, { createRef, useCallback, useState } from "react";
import { RoutesList } from "../../Routes/RoutesList";
import ProductImages from "./SC/ProductImages";
import ProductPreviewWrapper from "./SC/ProductPreviewWrapper";
import ImageCardItem from "./SC/ImageCardItem";
import ProductDetails from "./SC/ProductDetails";
import ProductCountCard from "./SC/ProductCountCard";
import CounterButton from "./SC/CounterButton";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";

// redux
import { ADD_ITEM_TO_CART } from "../../Redux/Slice/CartSlice";

//icons
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosRemove } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import AddToCardButton from "./SC/AddToCardButton";
import { nanoid } from "nanoid";
import { useRef } from "react";

function ProductPage() {
  const dispath = useDispatch();
  const productDataFromStorage = window.localStorage.getItem(
    "SelectedProductData"
  );
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedProductData, setselectedProductData] = useState({
    ...JSON.parse(productDataFromStorage),
    selectedQuantity: quantity,
  });
  const [productImage, setProductImage] = useState(
    selectedProductData.images[0]
  );

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
    setselectedProductData(
      (productData) =>
        (productData = { ...productData, selectedQuantity: quantity })
    );
  };
  const handleDecrease = () => {
    if (quantity <= 0) {
    } else {
      setQuantity((q) => q - 1);
      setselectedProductData(
        (productData) =>
          (productData = { ...productData, selectedQuantity: quantity })
      );
    }
  };

  const handleChangeProductImage = (e) => {
    const image = e.target.src;
    setProductImage(image);
  };

  const handleAddtoCart = useCallback(() => {
    dispath(ADD_ITEM_TO_CART(selectedProductData));
    setAddedToCart((added) => (added = true));
  }, []);

  return (
    <ProductPreviewWrapper>
      <section className="container ">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-5 my-3">
            <ProductImages ImageUrl={productImage}>
              {selectedProductData.images.map((imageUrl) => {
                return (
                  <ImageCardItem
                    key={nanoid(4)}
                    onClick={(e) => handleChangeProductImage(e)}
                  >
                    <img src={imageUrl} alt="produc-subnail-image" />
                  </ImageCardItem>
                );
              })}
            </ProductImages>
          </div>
          <div className="col-12 col-lg-6 mb-3 mt-lg-3">
            <ProductDetails
              ProductName={selectedProductData.title}
              description={selectedProductData.description}
              Discount={false}
              BeforeDiscount={false}
              Price={selectedProductData.price}
            />
            <div className="row d-flex gap-1 ">
              <div className="col-12 col-md-5">
                <ProductCountCard Counter={quantity}>
                  <CounterButton onClick={handleIncrease}>
                    <AiOutlinePlus />
                  </CounterButton>
                  <CounterButton onClick={handleDecrease}>
                    <IoIosRemove />
                  </CounterButton>
                </ProductCountCard>
              </div>
              <div className="col-12 col-md-6">
                <AddToCardButton
                  onClick={handleAddtoCart}
                  $addedCart={addedToCart}
                >
                  <IoCartOutline fontSize={"1.5rem"} />
                  add to cart
                  <small>{quantity}</small>
                </AddToCardButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProductPreviewWrapper>
  );
}

export default ProductPage;
