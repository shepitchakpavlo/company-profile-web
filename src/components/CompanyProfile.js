import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import NewsSection from './NewsSection';
import View from './View';

const CompanyProfile = ({ profile, className }) => {
  const { logo, name, description } = profile;

  return (
    <RootView className={className}>
      <Logo src={logo} />
      <Header>{name}</Header>
      <Body>{description}</Body>
      <NewsSection companyName={name}/>
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
  align-items: stretch;
  max-width: 400px;
  border: 1px solid black;
  padding: 12px;
`;

const Header = styled(View)`
  font-weight: bold;
  font-size: 22px;
  margin: 12px 0;
`;

const Body = styled(View)`
  margin-bottom: 12px;
`;

const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;
