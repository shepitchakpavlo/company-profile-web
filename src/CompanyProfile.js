import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import View from './View';

const CompanyProfile = ({ profile, className }) => {
  return (
    <RootView className={className}>
      <Logo src={profile.logo}/>
      <Header>{profile.name}</Header>
      <Body>{profile.description}</Body>
    </RootView>
  );
};

export default CompanyProfile;

CompanyProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

const RootView = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  border: 1px solid black;
  padding: 12px;
`;

const Header = styled(View)`
  font-weight: bold;
  font-size: 22px;
  margin: 12px 0;
`;

const Body = styled(View)``;

const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;
