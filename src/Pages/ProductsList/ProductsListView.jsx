import React, {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

//3rd party libraries
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { nanoid } from "nanoid";

//utilities
import { RoutesList } from "../../Routes/RoutesList";

//Redux
import {
  GET_ALL_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCT_ACTION,
} from "../../Redux/Slice/ProductsSlice";

//icons
import { IoInformationCircleOutline } from "react-icons/io5";

// components
import ProductCard from "../../Components/ProductCard/ProductCard";
import SectionWrapper from "../../Layout/SectionWrapper";
import ColorsFilter from "./SC/ColorsFilter";
import ButtonFilter from "./SC/FilterButton";
import FilterPannel from "./SC/FilterPannel";
import FloatingMenuButton from "./SC/FloatingMenuButton";
import PricingFilter from "./SC/PricingFilter";
import ProductsListWrapper from "./SC/ProductsListWrapper";
import SearchFilter from "./SC/SearchFilter";
import NoMoreProducts from "./SC/NoMoreProducts";
import Loading from "../../Layout/Loading/Loading";
import QuickFilterOptions from "./SC/QuickFilterOptions";

const ErrorModule = React.lazy(() =>
  import("../../Components/ErrorModule/ErrorModule")
);

/**
 * note for me in the future : -
 *
 * is you tried to feth data from server and set it to redux state and set it again to :
 * (useState - useMemo - UseCallback - useRef) ?? parent component of product cards will re-rendered
 * but if you get products data from server => redux => map ? correctly [no - re-render]
 * if you get data from server => redux => store in ((useState - useMemo - UseCallback - useRef)) ? //incorrect   [ re-render]
 */

const ProductsListView = () => {
  const {
    products: {
      isPinding,
      isSuccess,
      isError,
      ErrorMsg,
      isavailableProducts,
      hasMore,
      allProducts,
      productsByCategory,
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [Limit, setLimit] = useState(18);
  const [ListView, setListView] = useState(false);
  const [showFiltermenu, setShowFiltermenu] = useState(false);
  const filterPanelRef = useRef(null);
  let productsListRef = productsByCategory || allProducts;
  let observer = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      if (pathname.includes(RoutesList.categories.list)) {
        return dispatch(
          GET_PRODUCTS_BY_CATEGORY({ category: pathname.split("/")[2] })
        );
      }
      if (pathname.includes(RoutesList.productsList)) {
        return dispatch(GET_PRODUCT_ACTION({ limit: Limit, skip: 0 }));
      }
    };
    getProducts();
  }, [pathname]);

  //

  let lastProductcardRef = useCallback(
    (node) => {
      if (isPinding !== true) {
        //
        observer.current = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && hasMore) {
              setLimit((prevLimit) => prevLimit + 6);
            } else {
              entry.disconnect && entry.disconnect();
              console.log("end of the products data");
            }
          });
        });
        if (node) {
          observer.current.observe(node);
        }

        //
      }
    },
    [isPinding, allProducts]
  );

  useLayoutEffect(() => {
    const getMoreProductData = async () =>
      await dispatch(GET_PRODUCT_ACTION({ limit: Limit, skip: 0 }));
    if (pathname.includes(RoutesList.productsList)) {
      getMoreProductData();
    }
    return;
  }, [Limit]);

  const handleShowFilterPanel = () => {
    filterPanelRef.current.classList.toggle("visible-menu");
    setShowFiltermenu(!showFiltermenu);
    if (showFiltermenu) {
      document.body.style.height = "100vh";
      document.body.style.position = "fixed";
    } else {
      document.body.style.height = "100%";
      document.body.style.position = "relative";
    }
  };

  return (
    <SectionWrapper>
      <section className="container d-flex justify-content-center align-items-start w-100">
        <div className="row w-100">
          <div className="col-12 d-none d-lg-flex col-md-6 col-lg-3 my-2 p-0 p-lg-2">
            <FilterPannel ref={filterPanelRef}>
              <SearchFilter />
              <PricingFilter />
              <ColorsFilter />
              <ButtonFilter />
            </FilterPannel>
          </div>
          <div className="col-12 col-lg-9 mb-2 p-0 p-lg-2 position-relative overflow-hidden">
            <QuickFilterOptions ListView={ListView} setListView={setListView} />
            {window.navigator.onLine === false && (
              <Suspense fallback={<Loading />}>
                <ErrorModule
                  errorMessage="Sorry , your internet connecion is gone"
                  connectionError
                />
              </Suspense>
            )}
            {isavailableProducts === false &&
              pathname.includes(RoutesList.productsList) && (
                <Suspense fallback={<Loading />}>
                  <ErrorModule
                    errorMessage="sorry , there is no  prroduct available for show"
                    noProducts
                  />
                </Suspense>
              )}
            {isavailableProducts === false &&
              pathname.includes(RoutesList.categories.list) && (
                <Suspense fallback={<Loading />}>
                  <ErrorModule
                    errorMessage="sorry , there is no  prroduct available for show"
                    noProducts
                  />
                </Suspense>
              )}
            {isError && (
              <Suspense fallback={<Loading />}>
                <ErrorModule
                  errorMessage={
                    "there is problem with marketify and we're working in fix it now"
                  }
                  fetchError
                />
              </Suspense>
            )}
            <ProductsListWrapper id="productsWrapper" ListView={ListView}>
              {productsListRef?.map((products, index) => {
                if (productsListRef?.length === index + 1) {
                  return (
                    <ProductCard
                      key={nanoid(8)}
                      ref={lastProductcardRef}
                      isIncart={products.insideCart || false}
                      mediaUrl={products.images[0]}
                      ProductName={products.title}
                      Pricing={products.price}
                      Discount={
                        products.discountPercentage
                          ? products.discountPercentage
                          : false
                      }
                      data-category={products.category}
                      Rate={products.rating}
                      Loading={isPinding}
                      productsData={products}
                      listview={ListView}
                    />
                  );
                } else {
                  return (
                    <ProductCard
                      key={nanoid(8)}
                      isIncart={products.insideCart || false}
                      mediaUrl={products.images[0]}
                      brandName={products.brand}
                      rate={products.rating}
                      productName={products.title}
                      pricing={products.price}
                      discription={products.description}
                      discount={
                        products.discountPercentage
                          ? products.discountPercentage
                          : false
                      }
                      Loading={isPinding}
                      productsData={products}
                      listview={ListView}
                    />
                  );
                }
              })}
            </ProductsListWrapper>
            <NoMoreProducts
              className="shadow"
              style={hasMore === true ? { bottom: "-100px" } : { bottom: "0" }}
            >
              <IoInformationCircleOutline
                className="text-warning"
                fontSize={"1.5rem"}
              />
              thats all today ..
            </NoMoreProducts>
          </div>
        </div>
        <FloatingMenuButton
          Label="filter "
          onClick={() => handleShowFilterPanel()}
        />
      </section>
    </SectionWrapper>
  );
};

export default React.memo(ProductsListView);
