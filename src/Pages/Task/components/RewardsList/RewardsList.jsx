import React from 'react';

import { RewardCard } from '../RewardCard/index';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const getRewardsQuery = gql`
  query allRewards($filters: RewardFilter) {
    allRewards(filter: $filters) {
      image,
      description,
    }
  }
`;

const RewardsList = ({ data }) => {
  const isLoading = data.loading;
  const hasRewards = data.allRewards && data.allRewards.length;

  if (isLoading) {
    return <p>loading rewards..</p>;
  }

  if (!isLoading && !hasRewards) {
    return <p>no rewards</p>;
  }

  if (!isLoading && hasRewards) {
    return (
      <div className="rewards-list">
        <div className="grid">
          {data.allRewards.map((rewardItem, index) => (
            <div className="grid__item" key={index}>
              <div className="rewards-list__item">
                <RewardCard {...rewardItem} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default graphql(getRewardsQuery, {
  variables: ({ filters }) => {
    const newFilters = {
      ...filters,
      campaign_id: '001',
    };

    return {
      filters: newFilters,
    };
  },
})(RewardsList);
