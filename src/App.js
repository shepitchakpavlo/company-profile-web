import React from 'react';
import styled from 'styled-components';
import CompanyProfile from './CompanyProfile';
import View from './View';

function App() {
  return (
    <RootView>
      <CompanyProfile />
    </RootView>
  );
}

export default App;

const RootView = styled(View)`
  flex:1;
  flex-direction: column;
  align-items: center;
`;
