import React, { useState } from "react";
import styled from "styled-components";
import {
  MdCalendarViewMonth,
  MdViewSidebar,
  MdFilterAlt,
} from "react-icons/md";

const QuickFilterOptionsWrapper = styled.span`
  width: 100%;
  display: flex;
  padding: 0.3rem 0;
  margin-block-start: 0.5rem;

  border-radius: var(--border-radius);
`;

const ViewMethod = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-color-600);
  background-color: var(--third-color);
  border-radius: var(--border-radius);

  > :first-child {
    font-size: 1rem;
    line-height: 0.5rem;
    color: var(--secondary-color-500);
  }
`;

const TopFilterMethods = styled.span`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  margin-inline-start: 1rem;
  background-color: var(--third-color);
  border: 1px solid var(--primary-color-600);
  border-radius: var(--border-radius);
  overflow: hidden;
  text-transform: capitalize;

  > :first-child {
    width: 2.5rem;
    font-size: 1rem;
    line-height: 0.5;
    color: var(--text-color);
    text-align: center;
    color: var(--secondary-color-500);
  }
  > select {
    background-color: var(--third-color);
    color: var(--text-color) !important;
    border: none;
    padding: 0.3rem;
    font-size: 0.8rem;
    text-transform: capitalize;

    &:focus {
      outline: none;
    }
  }
`;

function QuickFilterOptions(props) {
  const handleToggleViewMethod = () => {
    props.setListView((view) => !view);
  };
  return (
    <QuickFilterOptionsWrapper>
      <ViewMethod type="button" onClick={handleToggleViewMethod}>
        {props.ListView === false ? (
          <i className="fi fi-rr-list"></i>
        ) : (
          <i className="fi fi-rr-grid"></i>
        )}
      </ViewMethod>
      <TopFilterMethods>
        <i className="fi fi-rr-filter"></i>
        <select selected="all-products">
          <option value="recent">recent</option>
          <option value="oldest">oldest</option>
          <option value="newest">newest</option>
          <option value="lowest_price">lowest price</option>
          <option value="all-products">all products</option>
        </select>
      </TopFilterMethods>
    </QuickFilterOptionsWrapper>
  );
}

export default QuickFilterOptions;
