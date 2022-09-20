import React, { forwardRef, useEffect } from "react";
import styled, { css } from "styled-components";

// icons
import { AiOutlineCheck } from "react-icons/ai";

const direction = document.dir;

const ProgressStepsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
const ProgressStepsList = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  &.first-step {
    > .progressbar {
      left: 25%;
      translate: -25% -30%;
      width: 20%;
      transition: width 0.3s ease-out;
      background-color: var(--accent-secondary-color);
    }
    > .account-setup {
      > span:first-child {
        background-color: var(--accent-secondary-color);

        .step-count {
          display: none;
        }
        .icon {
          display: flex;
          color: var(--text-color);
        }
      }
      > span:last-child {
        opacity: 1;
        font-weight: 600;
        text-decoration: line-through;
      }
    }
  }

  /* step two */
  &.second-step {
    > .progressbar {
      left: 30%;
      translate: -30% -30%;
      width: 50%;
      transition: width 0.3s ease-out;
      background-color: var(--accent-secondary-color);
    }
    > .security {
      > span:first-child {
        color: var(--text-color-secondary);
        background-color: var(--accent-secondary-color);

        .step-count {
          display: none;
        }
        .icon {
          display: flex;
        }
      }
      > span:last-child {
        opacity: 1;
        font-weight: 600;
        text-decoration: line-through;
      }
    }
  }
  /* step three */
  &.third-step {
    > .progressbar {
      left: 50%;
      translate: -50% -30%;
      width: 70%;
      transition: width 0.3s ease-out;
      background-color: var(--accent-secondary-color);
    }
    > .status {
      > span:first-child {
        color: var(--text-color-secondary);
        background-color: var(--accent-secondary-color);

        .step-count {
          display: none;
        }
        .icon {
          display: flex;
          background-color: var(--accent-secondary-color);
        }
      }
      > span:last-child {
        opacity: 1;
        font-weight: 600;
        text-decoration: line-through;
      }
    }
  }
  /* step four */
  &.fourth-step {
    > li:nth-child(4) {
      > span:first-child {
        color: var(--text-color-secondary);
        background-color: var(--accent-primary-color);
        ::after {
          background-color: var(--accent-primary-color);
          width: 150px;
        }
        .step-count {
          display: none;
        }
        .icon {
          display: flex;
        }
      }
      > span:last-child {
        opacity: 1;
        font-weight: 600;
        text-decoration: line-through;
      }
    }
  }
`;

const ProgressbarHolder = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  translate: -50% -30%;
  width: 70%;
  height: 6px;
  background-color: var(--primary-color-500);
`;
const Progressbar = styled.span`
  position: absolute;
  top: 30%;
  height: 6px;
  transition: width 0.3s ease-out;
  background-color: var(--secondary-color);
`;

const ProgressStemItem = styled.li`
  position: relative;
  z-index: 3;
  width: 100%;
  min-height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 00.2rem;
`;
const Step = styled.span`
  position: relative;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  place-content: center;
  color: var(--text-color);
  border-radius: 50%;
  background-color: var(--five-color);

  .step-count {
    width: inherit;
    height: inherit;
    line-height: 2rem;
    text-align: center;
    font-weight: 600;
  }
  .icon {
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: center;
    color: var(--primary-color);
    display: none;
  }
`;
const Describe = styled.span`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-family: var(--prompt-sans-family);
  opacity: 00.5;
`;

const ProgressSteps = forwardRef((props, ref) => {
  const handleClass = () => {
    if (props.Step === 1) {
      return "first-step";
    }
    if (props.Step === 2) {
      return "second-step first-step";
    }
    if (props.Step === 3) {
      return "third-step second-step first-step";
    }
    if (props.Step === 4) {
      return "fourth-step third-step second-step first-step";
    }
  };

  useEffect(() => {
    console.log("Step now" + props.Step);
  }, [props.Step]);
  return (
    <ProgressStepsWrapper>
      <ProgressStepsList ref={ref} className={handleClass()}>
        <ProgressbarHolder />
        <Progressbar className="progressbar" />
        <ProgressStemItem className="account-setup">
          <Step>
            <small className="step-count">1</small>
            <i className="fi fi-rr-check lh-1 icon"></i>
          </Step>
          <Describe>account setup</Describe>
        </ProgressStemItem>
        <ProgressStemItem className="security">
          <Step>
            <small className="step-count">2</small>
            <i className="fi fi-rr-check lh-1 icon"></i>
          </Step>
          <Describe>security</Describe>
        </ProgressStemItem>
        <ProgressStemItem className="status">
          <Step>
            <small className="step-count">3</small>
            <i className="fi fi-rr-check lh-1 icon"></i>
          </Step>
          <Describe>complete</Describe>
        </ProgressStemItem>
      </ProgressStepsList>
    </ProgressStepsWrapper>
  );
});

export default ProgressSteps;
