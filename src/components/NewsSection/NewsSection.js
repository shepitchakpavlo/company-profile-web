import React from 'react';
import styled from 'styled-components';
import View from '../View';
import Text from '../Text';
import useNews from './useNews';

const NewsSection = ({ companyName, className }) => {
  const { news, isLoading, isError } = useNews(companyName);
  const renderContent = () => {
    if (isError) {
      return <ErrorText>Loading error</ErrorText>;
    }
    if (isLoading) {
      return <LoaderText>Loading...</LoaderText>;
    }
    if (!news || news.length === 0){
      return <NoNewsText>No news for this company</NoNewsText>
    }

    return news.map(item => <div>new</div>);
  };

  return <RootView className={className}>
    <HeaderText>News</HeaderText>
    {renderContent()}
  </RootView>;
};

export default NewsSection;

const RootView = styled(View)`
flex-direction: column;
  border: 1px solid #ccc;
`;

const ErrorText = styled(Text)`
  color: red;
`;

const LoaderText = styled(Text)`
  color: green;
`;

const NoNewsText = styled(Text)`
  color: blue;
`;

const HeaderText = styled(Text)`
  font-size: 16px;
  text-decoration: underline;
`;
