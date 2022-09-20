import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//redux
import { BACK_TO_NORMAL_STATE } from "../../../Redux/Slice/UserSlice";

// icons
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFillClockFill } from "react-icons/bs";
import { RoutesList } from "../../../Routes/RoutesList";

const SubmissionAlertWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid var(--border-color);
  background-color: var(--primary-color);

  &.no-alert {
    border-top: 4px solid var(--text-color);
  }
  &.error-alert {
    border-top: 4px solid #ff1e00;
  }
  &.success-alert {
    border-top: 4px solid #2eb086;
  }

  @media (max-width: 768px) {
    width: calc(100% - 50px);
  }
`;
const CloseButtuon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
const AlertIcon = styled.span`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 2rem;

  > svg {
    font-size: 2.5rem;
    color: #36ae7c;

    &.Error {
      color: #f32424;
    }
  }
`;
const AlertMessage = styled.span`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > :first-child {
    margin-bottom: 0.3rem;
    font-weight: bold;
    opacity: 0.7;

    &.Error {
      color: #eb5353;
    }
    > span {
      font-size: 1rem;
      font-weight: bold;
      color: #eb5353;
    }
  }
  > :nth-child(2) {
    opacity: 0.7;
    width: 80%;
    text-align: center;
  }
`;

const Timer = styled.span`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.3rem;

  > :first-child {
    margin: 0;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

function SubmissionAlertBox(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [redirectTimer, setRedirectTimer] = useState(10);
  const [intervalRef, setIntervalRef] = useState(10);

  React.useEffect(() => {
    let redirectTimerRef = 10;
    if (props.AlertType) {
      //
      let interval = setInterval(() => {
        redirectTimerRef = redirectTimerRef - 1;
        setRedirectTimer(redirectTimerRef);
      }, 1000);
      setIntervalRef(interval);

      //
    }
  }, [props.AlertType]);

  React.useEffect(() => {
    if (redirectTimer === 0) {
      clearInterval(intervalRef);
      dispatch(BACK_TO_NORMAL_STATE());
      navigate(`/${RoutesList.login}`);
    }
  }, [redirectTimer]);

  const handleCloseAlert = () => {
    props.setToggleModal(false);
    dispatch(BACK_TO_NORMAL_STATE());
  };

  const handleSetBorder = () => {
    if (props.AlertType === null) return "no-alert";
    if (props.AlertType === false) return "error-alert";
    if (props.AlertType === true) return "success-alert";
  };
  const handleAlertIcon = () => {
    if (props.AlertType === true) {
      return <BsFillPatchCheckFill />;
    }
    if (props.AlertType === false) {
      return <IoIosCloseCircle className="Error" />;
    }
    return <BsFillClockFill color="#252525" />;
  };
  const handleAlertMessage = () => {
    if (props.AlertType === true) {
      return (
        <>
          <h6>congratulation .</h6>
          <small>{props.AlertMessageDescription}</small>
        </>
      );
    }
    if (props.AlertType === false) {
      return (
        <>
          <h6 className="Error">
            Ooops ! , The <span>{props.warningField} </span> is already used .
          </h6>
          <small className="Error">{props.AlertMessageDescription}</small>
        </>
      );
    }
    return "Waiting for subbmissin Response .";
  };

  return (
    <SubmissionAlertWrapper id="submission-alert" className={handleSetBorder()}>
      {props.AlertType === false && (
        <CloseButtuon>
          <button
            className="btn btn-close"
            type="button"
            onClick={handleCloseAlert}
          ></button>
        </CloseButtuon>
      )}
      <AlertIcon>{handleAlertIcon()}</AlertIcon>
      <AlertMessage>{handleAlertMessage()}</AlertMessage>
      {props.AlertType === true && (
        <Timer>
          <h6>Redirect after :</h6>
          <b>{redirectTimer}</b>
        </Timer>
      )}
    </SubmissionAlertWrapper>
  );
}

export default SubmissionAlertBox;
