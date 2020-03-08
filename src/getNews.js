const apiKey = '1ce4d2efa1394b6091e5773abb201d85';

const getUrl = (q, dateFrom = '2020-02-08') =>
  `http://newsapi.org/v2/everything?q=bitcoin&from=${dateFrom}&sortBy=publishedAt&apiKey=${apiKey}`;

export default async company => {
  const url = getUrl(company, '2020-02-08');
  const response = await fetch(url);
  const body = await response.json();

  return body.articles;
};
