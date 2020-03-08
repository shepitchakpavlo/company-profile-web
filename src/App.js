import React, { useState } from 'react';
import styled from 'styled-components';
import CompanyProfile from './CompanyProfile';
import TabBar from './TabBar';
import View from './View';

const itemsMock = [
  { id: '0', name: 'Google' },
  { id: '1', name: 'Amazon' },
  { id: '2', name: 'Microsoft' },
];

function App() {
  const [selectedCompany, setSelectedCompany] = useState(itemsMock[0].id);

  return (
    <RootView>
      <TabBar
        items={itemsMock}
        onSelect={setSelectedCompany}
        selected={selectedCompany}
      />
      <CompanyProfile />
    </RootView>
  );
}

export default App;

const RootView = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
