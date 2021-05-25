import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GloablStyle";
import { IndexPage } from "./pages";

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
