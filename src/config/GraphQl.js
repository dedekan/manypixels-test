import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://metaphysics-staging.artsy.net",
});

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MGM0Njc1OGMyNDYzNDAwMGZkMDEyMzgiLCJzYWx0X2hhc2giOiI3ZDk1ODRiNTA3MmUwNWZiZmYyOWM0NDcyNzJhMWVjZiIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwib3RwIjpmYWxzZSwiZXhwIjoxNjI4NjY4MjQ4LCJpYXQiOjE2MjM0ODQyNDgsImF1ZCI6IjVkNDA5OTZlNmU2MDQ5MDAwNzQ5MGZhMiIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI2MGM0Njc1OGMyNDYzNDAwMGZkMDEyM2IifQ.81krGgAkMFb7z1oXfzGAugk1W99KwJx3haSo3c1dABk";

const userId = "60c46758c24634000fd01238";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-access-token": token,
      "x-user-id": userId,
    },
  };
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
