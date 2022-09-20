import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoutesList } from "../../../Routes/RoutesList";

const ContactInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    width: 100%;
  }

  > li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.5rem;

    > span {
      opacity: 0.8;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 0.8rem;
    }
    > :nth-child(1) {
      opacity: 1;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  > li:last-child {
    flex-direction: row !important;
    gap: 1rem;

    > span {
      opacity: 1;
      a {
        text-decoration: none;
        font-size: 1.7rem;
        color: var(--text-color);
      }
    }
  }
`;

function ContactInfo(props) {
  return (
    <ContactInfoList>
      <ContactInfoList>
        <h4>Contacts info</h4>
        <br />
        <li>
          <span>address :</span>
          <span>60 Street Name , alexandria , Egypt .</span>
        </li>
        <li>
          <span>phone :</span>
          <span>{+20} 010000000000 .</span>
        </li>
        <li>
          <span>email :</span>
          <span>mail@example.com .</span>
        </li>
        <li>
          <span>WORKING DAYS/HOURS :</span>
          <span>sun : th / 9:00 AM - 8:00 PM .</span>
        </li>
        <li>
          <span>
            <Link to={RoutesList.facebookAccount}>
              <BsFacebook />
            </Link>
          </span>
          <span>
            <Link to={RoutesList.twitterAccount}>
              <AiFillTwitterCircle />
            </Link>
          </span>
          <span>
            <Link to={RoutesList.githubAccount}>
              <AiFillGithub />
            </Link>
          </span>
          <span>
            <Link to={RoutesList.instagramAccount}>
              <AiFillInstagram />
            </Link>
          </span>
        </li>
      </ContactInfoList>
    </ContactInfoList>
  );
}

export default ContactInfo;
