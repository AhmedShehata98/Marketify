import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

//components
import SectionWrapper from "../../Layout/SectionWrapper";
import CategoresListItems from "../../Components/categoryComponents/CategoresListItems";
import Advertisement from "./SC/Advertisement";
import FilledContainer from "../../Components/FIlledBContainer/FilledContainer";
import CategoriesList from "../../Components/categoryComponents/CategoriesList";
import ProductCard from "../../Components/ProductCard/ProductCard";

// redux
import {
  AUTH_USER_ACTION,
  GET_USERDATA_ACTION,
} from "../../Redux/Slice/UserSlice";
import { GET_FETURED_PRODUCT } from "../../Redux/Slice/ProductsSlice";

//3rd party libraries
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { nanoid } from "@reduxjs/toolkit";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SC/swiperStylesFile.css";

// utilities
import { dummyData } from "../../Utillites/dummyCategoryData";
import AdvertisementsBoard from "./SC/AdvertisementsBoard";
import Services from "./SC/Services";
import Title from "../../Components/Titles/Title";
import CarouselButtons from "./SC/CarouselButtons";
import useAuth from "../../hooks/useAuth";
import useGetUserData from "../../hooks/useGetUserData";

// photos

const banner_1 = require("../../assets/images/AdsCarousel/banner-00.jpg");
const banner_2 = require("../../assets/images/AdsCarousel/banner-01.jpg");
const banner_3 = require("../../assets/images/AdsCarousel/banner-02.jpg");
const banner_4 = require("../../assets/images/AdsCarousel/banner-03.jpg");

const Home = () => {
  const {
    user: { logoutSuccess, loginSuccess, isLoggedin, userData },
    products: { isPinding, isSuccess, isError, ErrorMsg, featuredProducts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [featuedPSwiper, setfeatuedPSwiper] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const token = document.cookie.split("=")[1];

  const dispathFeaturedProducts = useCallback(
    () => dispatch(GET_FETURED_PRODUCT()),
    []
  );
  const HandleResize = useCallback((e) => {
    const width = e.currentTarget.innerWidth;
    setScreenWidth((w) => (w = width));
  });
  const categoriesList = useCallback((data) => {
    return data.map((category, index) => {
      return (
        <CategoresListItems
          key={nanoid(6)}
          background={`${category.backgroundColor}`}
          color={`${category.color}`}
          categoryImage={category.categoryClassIcon}
          Title={category.categoryName}
          description={category.categoryDescription}
        />
      );
    });
  });

  useEffect(() => {
    if (featuredProducts) {
      //  ;
    } else {
      dispathFeaturedProducts();
    }
  }, []);

  useLayoutEffect(() => {
    window.onresize = (e) => HandleResize(e);
  }, [window.innerWidth]);

  return (
    <SectionWrapper>
      <FilledContainer background="var(--primary-color-200)">
        <article className="row w-100 d-flex flex-column flex-lg-row align-items-center-justify-content-between">
          <div className="col-12 col-lg-9 mt-3 mb-3">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={true}
              navigation={{
                enabled: true,
              }}
              autoplay={true}
              pagination={{
                clickable: true,
                enabled: true,
              }}
              wrapperTag="ul"
              className="site-ads-gallery"
            >
              <SwiperSlide key={nanoid(4)} tag="li">
                <figure>
                  <img src={banner_3} alt="ads-image" />
                </figure>
              </SwiperSlide>
              <SwiperSlide key={nanoid(4)} tag="li">
                <figure>
                  <img src={banner_4} alt="ads-image" />
                </figure>
              </SwiperSlide>
              <SwiperSlide key={nanoid(4)} tag="li">
                <figure>
                  <img src={banner_1} alt="ads-image" />
                </figure>
              </SwiperSlide>
              <SwiperSlide key={nanoid(4)} tag="li">
                <figure>
                  <img src={banner_2} alt="ads-image" />
                </figure>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-12 d-none d-lg-flex col-lg-3 mt-4 mb-3">
            <Advertisement />
          </div>
        </article>
      </FilledContainer>
      <FilledContainer ItemStart>
        <article className="row w-100 d-flex flex-column align-items-center-justify-content-center gap-2 ">
          <div className="col-12 text-start mt-3 px-0">
            <Title titleTypography="browse by category" />
          </div>
          <CategoriesList>{categoriesList(dummyData)}</CategoriesList>
        </article>
      </FilledContainer>
      <section className="container mt-4">
        <div className="col-12 text-start mb-4 px-0">
          <Title titleTypography="our best services" />
        </div>
        <div className="col-12 ">
          <Services />
        </div>
      </section>
      <section className="container ">
        <div className="col-12 text-start  px-0">
          <Title titleTypography="featrued products">
            <div className="d-flex gap-1">
              <CarouselButtons
                type="button"
                onClick={() => featuedPSwiper.slidePrev("0.8s")}
              >
                <i class="fi fi-rr-arrow-small-left"></i>
              </CarouselButtons>
              <CarouselButtons
                type="button"
                onClick={() => featuedPSwiper.slideNext("0.8s")}
              >
                <i class="fi fi-rr-arrow-small-right"></i>
              </CarouselButtons>
            </div>
          </Title>
        </div>
        <div className="col-12">
          <Swiper
            className="swiper-featured-products"
            slidesPerView={screenWidth >= 960 ? 6 : 2}
            spaceBetween={15}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              enabled: true,
            }}
            navigation={{
              enabled: true,
            }}
            onSwiper={setfeatuedPSwiper}
          >
            {featuredProducts?.map((product) => {
              return (
                <SwiperSlide>
                  <ProductCard
                    key={nanoid(6)}
                    fixedPath
                    mediaUrl={product.thumbnail}
                    productsData={product}
                    productName={product.title}
                    brandName={product.brand}
                    rate={product.rating}
                    Loading={isPinding}
                    pricing={product.price}
                    discount={product.discountPercentage}
                    listview={false}
                    insideSwiper={true}
                    discription={product.description}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Home;
