import React from 'react';
import pizza from './img/pizza.jpg';
import PizzaCard from './components/PizzaCard';
import './App.css'

function App() {
  return (
    <div className="App">
      <PizzaCard title="Маргаритааааа" text='Пицца с помидорами' img={pizza} price='от 299.99 руб.'/>
    </div>
  );
}

export default App;