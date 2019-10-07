import React from 'react';

import { RewardsFilters } from './components/RewardsFilters';
import { RewardsList } from './components/RewardsList';
import { filter } from 'async';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {},
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    const { target } = event;
    const { name, value } = target;

    const newFilters = {
      ...this.state.filters,
      [name]: value,
    };

    if (!value) {
      delete newFilters[name];
    }

    this.setState({
      filters: newFilters,
    });
  }

  render() {
    const { filters } = this.state;

    return (
      <div className="rewards">
        <div className="rewards__filters">
          <RewardsFilters onChange={this.handleFilterChange} filters={filters} />
        </div>
        <div className="rewards__list">
          <RewardsList filters={filters} />
        </div>
      </div>
    );
  }
};

export default Task;
