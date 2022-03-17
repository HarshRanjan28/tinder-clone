import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
const Header = ({ backbutton }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backbutton ? (
        <IconButton onClick={() => navigate(backbutton)}>
          <ArrowBackIosIcon className="header_icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header_logo"
          src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
          alt=""
        />
      </Link>

      <Link to="/message">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
