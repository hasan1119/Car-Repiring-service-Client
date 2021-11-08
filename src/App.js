import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import ContextProvider from "./contexts/ContextProvider.js";
function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
