import React from 'react';
import getNews from '../../getNews';

const useNews = companyName => {
  const [news, setNews] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const loadNews = async () => {
    setIsLoading(true);
    try {
      const result = await getNews(companyName);
      setNews(result);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    loadNews();
  }, []);

  return { news, isLoading, isError };
};

export default useNews;
