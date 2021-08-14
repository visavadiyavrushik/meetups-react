import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

// pages
import AllMeetupspage from "./pages/AllMeetups";
import Favoritespage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";


//routes 
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupspage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <Favoritespage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
