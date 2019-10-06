import React from "react";
import configureStore, { history } from "../store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import styled from "styled-components";
import Routes from "./Routes";

const App: React.FC = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <FixedBackground
          bgUrl={`${process.env.PUBLIC_URL}/assets/backgrounds/main-bg.jpg`}
        />
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

const FixedBackground = styled.div<{ bgUrl: string }>`
  width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: -1;
  overflow: hidden;
  top: 0;
  left: 0;
  background: url(${p => p.bgUrl});
`;

export default App;
