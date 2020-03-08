import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import View from './View';

const TabBar = ({ items, onSelect, selected }) => {
  const renderItem = ({ name, id }) => (
    <TabView isSelected={selected === id} onClick={() => onSelect(id)} key={id}>
      {name}
    </TabView>
  );

  return <RootView>{items.map(renderItem)}</RootView>;
};

export default TabBar;

TabBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

const RootView = styled(View)`
  height: 50px;
  align-self: stretch;
`;

const decideBackgroundColor = props => (props.isSelected ? '#ccc' : '#f1f1f1');

const TabView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
  background-color: ${decideBackgroundColor};
  &:hover {
    background-color: #ddd;
  }
`;
