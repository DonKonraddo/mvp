import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';

// Cash is not important during developing
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  uri: 'http://localhost:9090/graphql',
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
