import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import graphqlClient from "./config/GraphQl";

import reportWebVitals from "./reportWebVitals";

import { PageListArtist } from "./pages/ListArtist";
import { PageDetailArtist } from "./pages/DetailArtist";

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
    <ApolloProvider client={graphqlClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Global styles={globalStyle} />
          <Switch>
            <Route path="/" exact component={PageListArtist} />
            <Route path="/profile/:id" exact component={PageDetailArtist} />
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
