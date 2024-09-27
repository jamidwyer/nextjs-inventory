import { ApolloClient, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { relayStylePagination } from '@apollo/client/utilities';

export const authenticatedVar = makeVar(true);

const httpLink = new HttpLink({
  uri: process.env.API_URL,
  credentials: 'same-origin',
});

const logoutLink = onError(({ graphQLErrors }) => {
  if (
    graphQLErrors?.length &&
    (graphQLErrors[0].extensions?.response as any)?.statusCode === 401
  ) {
    authenticatedVar(false);
  }
});

const client = new ApolloClient({
  link: logoutLink.concat(httpLink),
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
