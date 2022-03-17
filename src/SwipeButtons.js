import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
