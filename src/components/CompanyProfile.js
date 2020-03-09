import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import NewsSection from './NewsSection';
import View from './View';
import Text from './Text';

const CompanyProfile = ({ profile, className }) => {
  const { logo, name, description } = profile;

  return (
    <RootView className={className}>
      <Logo src={logo} />
      <HeaderText>{name}</HeaderText>
      <BodyText>{description}</BodyText>
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

const HeaderText = styled(Text)`
  font-weight: bold;
  font-size: 22px;
  margin: 12px 0;
`;

const BodyText = styled(Text)`
  margin-bottom: 12px;
`;

const Logo = styled(Image)`
  width: 100%;
  height: auto;
`;
