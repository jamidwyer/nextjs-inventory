import {
  ApolloClient,
  concat,
  HttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: process.env.API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('jwt');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          inventoryItems: relayStylePagination(),
        },
      },
    },
  }),
});

export default client;
