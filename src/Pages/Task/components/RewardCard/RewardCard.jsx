import React from 'react';

const RewardCard = ({ description, image }) => (
  <div className="reward-card">
    <div className="reward-card__image">
      <img src={image} />
    </div>
    <div className="reward-card__description">
      <p>{description}</p>
    </div>
  </div>
);

export default RewardCard;
