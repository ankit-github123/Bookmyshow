import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
// common-components
import Header from "./common-components/header/Header";
import Footer from "./common-components/footer/Footer";
import PageNotFound from "./common-components/pagenotfound/PageNotFound";
// components
import Stream from "./components/stream/Stream";
import StreamMovies from "./components/stream/StreamMovies";
import Movies from "./components/movies/Movies";
import Event from "./components/events/Event";
import Gift from "./components/gift/Gift";
import Offer from "./components/offers/Offer";
import Plays from "./components/plays/Plays";
import Sports from "./components/sports/Sports";
import Activities from "./components/activities/Activities";
import Buzz from "./components/buzz/Buzz";
import Corporates from "./components/corporates/Corporates";
import Listyourshow from "./components/listyourshow/Listyourshow";
import Checkout from "./components/checkout/Checkout";
import BookingMovie from "./components/booking-movie/BookingMovie";
import ProfilePage from './common-components/header/ProfilePage';

export const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Header />
      <Switch>
        <Route path="/404" component={PageNotFound} />
        <Route path="/stream" component={Stream} />
        <Route exact path="/" component={Movies} />
        <Route exact path="/stream-movies" component={StreamMovies} />
        <Route path="/event" component={Event} />
        <Route path="/plays" component={Plays} />
        <Route path="/sports" component={Sports} />
        <Route path="/activities" component={Activities} />
        <Route path="/buzz" component={Buzz} />
        <Route path="/list-your-show" component={Listyourshow} />
        <Route path="/voucher" component={Corporates} />
        <Route path="/offer" component={Offer} />
        <Route path="/gift" component={Gift} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/booking" component={BookingMovie} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
