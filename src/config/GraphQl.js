import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://metaphysics-production.artsy.net/",
});

const token = process.env.REACT_APP_ARTSY_TOKEN;
const userId = process.env.REACT_APP_ARTSY_USER_ID;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
      "x-access-token": token,
      "x-user-id": userId,
      Authorization: `Bearer ${token}`,
    },
  };
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
