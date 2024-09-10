import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.API_URL,
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
