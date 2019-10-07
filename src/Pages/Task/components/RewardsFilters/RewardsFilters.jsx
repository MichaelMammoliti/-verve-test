import React from 'react';

const inputs = [
  {
    name: 'quantity',
    placeholder: 'quantity',
    type: 'text',
  },
  {
    name: 'points',
    placeholder: 'points',
    type: 'text',
  },
  {
    name: 'capPerAmbassador',
    placeholder: 'capPerAmbassador',
    type: 'text',
  }
];

const RewardsFilters = ({ filters, onChange }) => (
  <div className="rewards-filters">
    {inputs.map((inputItem, index) => (
      <div className="rewards-filters__item" key={index}>
        <div className="input">
          <div className="input__label">
            <span>{inputItem.name}</span>
          </div>

          <div className="input__field">
            <input
              name={inputItem.name}
              placeholder={inputItem.name}
              type={inputItem.type}
              defaultValue={filters[inputItem.name]}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default RewardsFilters;
