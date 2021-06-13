import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://metaphysics-production.artsy.net/",
});

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MGM0MzRhZDUwZTM4ZTAwMTM4N2M4NmEiLCJzYWx0X2hhc2giOiJkODM3MjUzMzJhZDhhNjAyMjUwYzA2NjI4ZTc4YzNhMSIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwib3RwIjpmYWxzZSwiZXhwIjoxNjI4NzkyNzE4LCJpYXQiOjE2MjM2MDg3MTgsImF1ZCI6IjVkNDA5OTZlNmU2MDQ5MDAwNzQ5MGZhMiIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI2MGM2NGQ4ZWE4ZmZiZTAwMTM0YTEzYTcifQ.0SGJRekqS-EhvOuBEb79eh0wgVFGe87DucwCXri6LVc";

const userId = "60c434ad50e38e001387c86a";

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
  // credentials: "include",
  // fetchOptions: {
  //   mode: "cors",
  // },
});
