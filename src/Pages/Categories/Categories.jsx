import React, { useEffect, useState } from "react";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
//components
import SectionWrapper from "../../Layout/SectionWrapper";
import CategoresList from "../../Components/categoryComponents/CategoriesList";
import CategoresListItems from "../../Components/categoryComponents/CategoresListItems";
import CategoryCard from "./SC/CategoryCard";

//utilities
import { dummyData } from "../../Utillites/dummyCategoryData";

//redux
import { GET_ALL_CATEGORIES } from "../../Redux/Slice/ProductsSlice";

//icons
import { HiTemplate } from "react-icons/hi";

const Categories = () => {
  document.title = "Categories list";
  const {
    products: { isPinding, isSuccess, isError, ErrorMsg, categoriesData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [CategoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;
    dispatch(GET_ALL_CATEGORIES(signal));

    return () => {
      abort.abort();
    };
  }, []);

  useEffect(() => {
    if (categoriesData?.length > 0 && isPinding === false) {
      setCategoriesList(categoriesData);
    }
  }, [categoriesData?.length]);

  return (
    <SectionWrapper>
      <section className="container d-flex flex-column justify-content-center align-items-center">
        <CategoresList className="h-100">
          {dummyData.map(
            (
              {
                categoryName,
                categoryClassIcon,
                categoryDescription,
                backgroundColor,
                color,
              },
              index
            ) => {
              return (
                <CategoresListItems
                  key={nanoid(6)}
                  background={`${backgroundColor}`}
                  color={`${color}`}
                  categoryImage={categoryClassIcon}
                  Title={categoryName}
                  description={categoryDescription}
                  path={categoryName}
                />
              );
            }
          )}
        </CategoresList>
      </section>
    </SectionWrapper>
  );
};

export default Categories;
