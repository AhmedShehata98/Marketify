import React, { useLayoutEffect } from "react";
import styled from "styled-components";

const PreviewWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > .container {
    min-height: inherit;
    > .row {
      min-height: inherit;
    }
  }
`;

function ProductPreviewWrapper(props) {
  useLayoutEffect(() => {
    let SectionWrapperRef = document.getElementById("product-wrapper");
    SectionWrapperRef.classList.add("fade-disabled");

    return () => {
      SectionWrapperRef.classList.add("fade-in");
    };
  }, []);
  return (
    <PreviewWrapper className="fade-in" id="product-wrapper">
      {props.children}
    </PreviewWrapper>
  );
}

export default ProductPreviewWrapper;
