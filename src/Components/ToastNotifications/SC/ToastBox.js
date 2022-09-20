import React from "react";
import { useMemo } from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const StyledToastBox = styled.section`
  width: 320px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.7rem;
  background-color: var(--secondary-color-800);
  color: ${dynamicColor("--secondary-color-800")};
  border: 1px solid var(--primary-color-600);
  transition: translate 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out;
  translate: 0 200%;
  opacity: 0;

  &.showing-msg {
    translate: 0% 0%;
    opacity: 1;
    transition: translate 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.4s ease-out;
  }
  &.error-severity {
    border-bottom: 4px solid var(--error-color);
    > :first-child {
      color: var(--error-color);
    }
  }
  &.warning-severity {
    border-bottom: 4px solid var(--warning-color);
    > :first-child {
      color: var(--warning-color);
    }
  }
  &.info-severity {
    border-bottom: 4px solid var(--info-color);
    > :first-child {
      color: var(--info-color);
    }
  }
  &.success-severity {
    border-bottom: 4px solid var(--success-color);
    > :first-child {
      color: var(--success-color);
    }
  }

  @media (${breakpoints.maxTabletL}) {
    width: 100%;
    min-width: 100%;
    margin-inline: 1rem;
  }
`;
const MessageContent = styled.small`
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 0;
`;

const Icon = styled.span`
  width: 75px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > :first-child {
    font-size: 1.3rem;
    line-height: 0.5;
    border-radius: 50%;
  }
`;

function ToastBox(props) {
  const handleShowToastStae = useMemo(() => {
    if (props.$show && props.$severity === "error") {
      return "shadow showing-msg error-severity";
    } else if (props.$show && props.$severity === "warning") {
      return "shadow showing-msg warning-severity";
    } else if (props.$show && props.$severity === "info") {
      return "shadow showing-msg info-severity";
    } else if (props.$show && props.$severity === "success") {
      return "shadow showing-msg success-severity";
    }
  }, [props.$show, props.$severity]);
  const handleShowIcon = useMemo(() => {
    if (props.$severity === "error") {
      return "fi fi-rr-cross-circle";
    } else if (props.$severity === "warning") {
      return "fi fi-rr-exclamation";
    } else if (props.$severity === "info") {
      return "fi fi-rr-info";
    } else if (props.$severity === "success") {
      return "fi fi-rr-badge-check";
    }
  }, [props.$show, props.$severity]);
  return (
    <StyledToastBox className={handleShowToastStae} {...props}>
      <Icon>
        <i className={handleShowIcon}></i>
      </Icon>
      <MessageContent>{props.$message}</MessageContent>
    </StyledToastBox>
  );
}

export default ToastBox;
