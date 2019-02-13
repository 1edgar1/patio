import React, { Component } from 'react';
import logo from './logo.svg';
import store from "./store.jpg";
import coffee from "./coffee.jpg";
import map from "./map.svg";
import './App.css';

class App extends Component {
  render() {
    return (
    <body className="App">
      <header>
         <h1> 
           <img src={logo} alt="patio"/> 
         </h1> 
      </header>

      <nav>   
        <a href="https://aztacofestival.com/">Street Food</a>
        <a href="https://aztacofestival.com/gallery/">The Space</a>
        <a href="https://www.cornerbakerycafe.com/">Cafe</a>
        <a href="https://letstacoboutitblog.com/">Blog</a>
      </nav>

      <section>
        <h2>
          A rotational pop-up restaurant and café serving up the freshest, tastiest street food from different chefs every two weeks.
        </h2>
      </section>

      <section className="store">
        <img src={store} alt="store"/>
      </section>

      <section>
        <p>
        Amongst the office blocks between stylish Shoreditch and the bustle of the city find our lush spot of paradise perched at the edge of Finsbury Square’s popular bowls green. It’s the end of our official first day of trading and while it’s still a week away until we have our first street food chefs in occupation, we’ve had a ball of a day serving up coffees, ice creams and soft drinks to our new (and hopefully returning) customers. 
        </p>

        <blockquote>
        “I’d like to be a part of something with a bit of soul. I really want to know about the people I’m serving, what makes them tick.”
        </blockquote>

        <p>
        We’ll be open this week Monday to Friday from 8am to 6pm so pop in to say hello and to enjoy an expert barista coffee or real fruit ice lolly on Finsbury Square’s Patio.
        </p>
      </section>

      <section className="coffee">
        <img src={coffee} alt="coffe"/>
      </section>

      <section className="map">
        <img src={map} alt="map"/>

          <p>
          We are five minutes walk from Old St and Moorgate stations and a ten minute walk away from Shoreditch High Street and Liverpool Street stations.
          </p>

          <p>
          Call us on <a href="tel:4407549520689"> +44 07549 520 689</a>
          </p>
      </section>

      
    

    


        
    </body>
    );
  }
}

export default App;
