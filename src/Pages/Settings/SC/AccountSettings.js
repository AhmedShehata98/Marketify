import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

// components
import InputsWrapper from "../../../Components/FormComponents/InputsWrapper";
import Title from "../../../Components/Titles/Title";
import BasicInputField from "../../../Components/FormComponents/BasicInputField";
import CustomziedButton from "../../../Components/Buttons/CustomziedButton";
import StyledAnchor from "../../../Components/StyledAnchor/StyledAnchor";

// 3rd party libraries
import styled from "styled-components";

import { Formik, Form } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux
import {
  UPDATE_USER_DATA_ACTION,
  UPDATE_USER_PASSWORD,
  DELETE_ACCOUNT_ACTION,
  BACK_TO_NORMAL_STATE,
} from "../../../Redux/Slice/UserSlice";
import { SHOW_NOTIFICATION } from "../../../Redux/Slice/ToastNotificationsSlice";

// utilitls
import { RoutesList } from "../../../Routes/RoutesList";

//hooks
import useGetUserData from "../../../hooks/useGetUserData";

// styled components
const PersonalInfoWrapper = styled.section`
  width: calc(100% - 300px);
  min-height: 50vh;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  margin-top: 0.5rem;

  > .row:nth-child(2) {
    background-color: var(--third-color);
    border-radius: var(--border-radius);
  }
  .password-section {
    padding: 0.5rem;
    background-color: var(--third-color);
    border-radius: var(--border-radius);
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    padding-top: 1rem;
    background-color: var(--primary-color);
  }
`;

const PersonalInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem 1rem;
  height: max-content;
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
`;
const Security = styled(PersonalInfo)``;

const UserImage = styled.figure`
  position: relative;
  height: 90px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 1rem;
  margin-inline: auto;
  border-radius: 50%;
  border: 3px solid var(--secondary-color);
  background-color: var(--primary-color-200);
  overflow: hidden;

  &:hover {
    .change-avatar {
      translate: -50% 0 !important;
    }
  }

  > .change-avatar {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    padding-block: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    translate: -50% 100%;
    transition: translate 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: var(--primary-color-200);

    > label {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;

      > :first-child {
        line-height: 0.5;
      }
    }
    > input[type="file"] {
      display: none;
    }
  }

  > img {
    max-width: 90px;
    object-position: center;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    padding: 6px;
  }
`;

const Headding = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  background-color: transparent;

  > button {
    font-size: 1.2rem;
    border: none;
    background-color: var(--third-color);
    border-radius: 45px;
    aspect-ratio: 1 / 1;
    height: inherit;
    display: none;

    &:hover {
      color: var(--secondary-color);
    }

    > svg {
      user-select: none;
      pointer-events: none;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  > h6 {
    text-transform: uppercase;
    margin-bottom: 0;
    border-radius: 45px;
    font-weight: 700;
  }
`;

const ModalBackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10001;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333bf;
`;

const ChangePasswordModal = styled.div`
  width: 40vw;
  min-height: 35vh;
  background-color: var(--primary-color-300);
  border-radius: var(--border-radius);
`;

function AccountSettings() {
  var {
    user: {
      editUsrDataPending,
      updatePasswordError,
      updatePasswordSuccess,
      deleteAccountError,
      deleteAccountSuccess,
      updateDataError,
      updateDataSuccess,
    },
  } = useSelector((state) => state);
  var dispatch = useDispatch();
  var Navigate = useNavigate();
  const { userData, isAuth, Loading, error } = useGetUserData();
  var [userImage, setUserImage] = useState({
    fetchedImageUrl: "",
    imageBlob: "",
  });

  var [initialValues, setInitialValues] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });
  var passwordInitialValues = {
    oldPassword: "",
    newPassword: "",
  };

  const [valuesIsChanged, setValuesIsChanged] = useState(false);
  var [editFileds, setEditFields] = useState({
    changed: false,
  });
  const [timer, setTimer] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const changePasswordPortal = createPortal(
    <ModalBackDrop>
      <ChangePasswordModal>asdasd</ChangePasswordModal>
    </ModalBackDrop>,
    document.getElementById("profile-page-modal")
  );

  const dispathDeleteAccount = useCallback(() => {
    dispatch(DELETE_ACCOUNT_ACTION());
  }, []);

  const handleChange = useCallback((e) => {
    let currentValue = e.target.value;
    let InputName = e.target.name;
    setInitialValues((prevValues) => ({
      ...prevValues,
      [InputName]: currentValue,
    }));
    if (initialValues[InputName] !== currentValue) {
      setValuesIsChanged((prev) => (prev = true));
    } else {
      setValuesIsChanged((prev) => (prev = false));
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showModal]);
  useEffect(() => {
    if (userImage.imageBlob) {
      handleSendToServer();
    }
  }, [userImage.imageBlob]);
  useEffect(() => {
    if (userImage.fetchedImageUrl) {
      handleSendUserImageToDB();
    }
  }, [userImage.fetchedImageUrl]);

  useEffect(() => {
    setInitialValues(() => ({
      avatar: userData.avatar,
      firstName: userData.firstname,
      lastName: userData.lastname,
      email: userData.email,
      username: userData.username,
    }));

    console.table(initialValues);
  }, [userData, Loading]);

  // useCallback's

  const handleEditMode = useCallback(() => {
    setEditFields(() => {
      return {
        avatar: false,
        firstName: false,
        lastName: false,
        username: false,
        email: false,
      };
    });
  }, []);

  const handleSendUserImageToDB = useCallback(() => {
    const { url } = userImage.fetchedImageUrl;
    const newData = {
      ...userData,
      avatar: url,
    };

    //
    dispatch(UPDATE_USER_DATA_ACTION(newData));
  });

  const handleSendToServer = useCallback(async () => {
    const res = await axios({
      url: "https://sore-red-gosling-vest.cyclic.app/upload",
      method: "POST",
      data: {
        asset: userImage.imageBlob,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = await res.data;
    setUserImage((oldData) => {
      return { ...oldData, fetchedImageUrl: data };
    });
  }, [userImage.imageBlob]);

  async function handleGetImageFile(e, values) {
    const file = e.target.files[0];
    setUserImage((imageFile) => {
      return { ...imageFile, imageBlob: file };
    });
  }

  const handleGoBack = () => Navigate(`/${RoutesList.profile.profile}`);

  // function onSubmit(values) {
  //   // setSubmitting(false);

  //   var data = {
  //     avatar: values.avatar,
  //     firstname: values.firstname,
  //     lastName: values.lastname,
  //     username: values.username,
  //     email: values.email,
  //   };
  //   dispatch(UPDATE_USER_DATA_ACTION(data));
  // }
  return (
    <PersonalInfoWrapper>
      {/* start personal information edit aarticle*/}
      <Headding>
        <button type="button" onClick={handleGoBack}>
          <i className="fi fi-sr-arrow-small-left lh-1"></i>
        </button>
        <h6> personal Information</h6>
      </Headding>
      <PersonalInfo>
        <div className="row">
          <div className="col-12">
            <UserImage>
              <img src={userData?.avatar} alt="user-image" />
              <div className="change-avatar">
                <label htmlFor="change-avatar-img">
                  <i className="fi fi-br-picture"></i>
                </label>
                <input type={"file"} id={"change-avatar-img"} />
              </div>
            </UserImage>
          </div>
          <div className="col-3 ">
            <InputsWrapper Direction={"col"}>
              <BasicInputField
                type="text"
                $lable="first name"
                name={"firstName"}
                value={initialValues.firstName}
                onChange={handleChange}
              />
            </InputsWrapper>
          </div>
          <div className="col-3 ">
            <InputsWrapper Direction={"col"}>
              <BasicInputField
                type="text"
                $lable="last name"
                name={"lastName"}
                value={initialValues.lastName}
                onChange={handleChange}
              />
            </InputsWrapper>
          </div>
          <div className="col-5 ">
            <InputsWrapper Direction={"col"}>
              <BasicInputField
                type="text"
                $lable="username"
                name={"username"}
                value={initialValues.username}
                onChange={handleChange}
              />
            </InputsWrapper>
          </div>
        </div>
        <article className="row w-100 mb-3">
          <div className="col-4">
            <CustomziedButton type={"buttom"} disabled={!valuesIsChanged} md>
              update data
            </CustomziedButton>
          </div>
        </article>
      </PersonalInfo>
      {/* start security article */}
      <Headding>
        <h6>security</h6>
      </Headding>
      <Security>
        <article className="row mb-1">
          <div className="col-6">
            <InputsWrapper Direction={"col"}>
              <BasicInputField
                type="email"
                name={"email"}
                placeholder="email address"
                value={initialValues.email}
                onChange={handleChange}
                disabled={"true"}
                $lable={"email"}
              />
            </InputsWrapper>
          </div>
          <div className="col-6">
            <inputWrapper Direction={"col"}>
              <BasicInputField
                type="password"
                name={"password"}
                placeholder="email address"
                value={"**********"}
                onChange={handleChange}
                disabled={"true"}
                $lable={"password"}
              />
            </inputWrapper>
          </div>
        </article>
        <article className="row w-100 mb-3">
          <div className="col-4">
            <CustomziedButton
              type="button"
              onClick={() => setShowModal(true)}
              md
            >
              change password
            </CustomziedButton>
          </div>
          <div className="col-3">
            <StyledAnchor href={"#"} $danger $typographS>
              <i className="fi fi-rr-trash lh-1 "></i>
              <small>delete account</small>
            </StyledAnchor>
          </div>
        </article>
        {showModal && changePasswordPortal}
      </Security>
    </PersonalInfoWrapper>
  );
}

export default AccountSettings;
