import React from "react";
import styled from "styled-components";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";
const NewsLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 1;

  @media (max-width: 768px) {
    width: 100%;
  }

  > :first-child {
    font-weight: 600;
    text-transform: uppercase;
  }
  > :nth-child(2) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }

    > p {
      width: 50%;
      font-weight: 500;
      text-transform: capitalize;
      opacity: 0.7;
      color: var(--text-color-secondary) !important;

      @media (max-width: 768px) {
        width: auto;
      }
    }
  }
`;
const SubscribeForm = styled.form`
  display: flex;
  width: 60%;
  height: 35px;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }

  > input {
    border: none;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    height: 100%;
    background-color: var(--primary-color-400);
    flex-grow: 1;
    color: ${dynamicColor("--primary-color-400")};

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${dynamicColor("--primary-color-400")};
    }

    @media (max-width: 768px) {
      width: 85%;
    }
  }
  > button {
    height: 100%;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    border-left: 1px solid var(--border-color);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background-color: var(--accent-secondary-color);
    color: ${dynamicColor("--accent-secondary-color")};

    &:hover {
      background-color: var(--hover-secondary);
    }
  }
`;

function NewsLetter() {
  return (
    <NewsLetterWrapper>
      <h5>Subscribe NewsLetter</h5>
      <span>
        <p>
          Get all the latest information on Events, Sales and Offers. Sign up
          for newsletter today.
        </p>
        <SubscribeForm className="shadow-sm">
          <input
            type={"email"}
            name="subscribe-newsletter"
            placeholder="email address .."
            autoComplete={"off"}
          />
          <button type="button"> subscribe</button>
        </SubscribeForm>
      </span>
    </NewsLetterWrapper>
  );
}

export default NewsLetter;
