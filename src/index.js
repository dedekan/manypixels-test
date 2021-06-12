import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {
  createHttpLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import { ListArtist } from "./pages/ListArtist";
import { DetailArtist } from "./pages/DetailArtist";

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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #efefef;
  }

  * {
    font-family: "Source Sans Pro", Inter, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <BrowserRouter>
          <Global styles={globalStyle} />
          <Switch>
            <Route path="/" exact component={ListArtist} />
            <Route path="/profile/:id" exact component={DetailArtist} />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
