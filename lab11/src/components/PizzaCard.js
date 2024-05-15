import React, { useState } from 'react';

function PizzaCard(props) {
  const [quantity, setQuantity] = useState(1);
  const [diameter, setDiameter] = useState('16');
  const handleDiameterChange = (event) => 
    {
    setDiameter(event.target.value);
  };

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plus = () => {
    setQuantity(quantity + 1);
  };

  const displayAlert = () => {
    alert(`Вы заказали пиццу ${diameter} см в количестве ${quantity}  `);
  };

  return (
    <div className="block">
      <div className="img">
        <img src={props.img} />
      </div>
      <form>
        <label for="diameter">Диаметр:</label>
        <select className="diameter" name="diameter" id="diameter" value={diameter} onChange={handleDiameterChange}>
            <option value="16">16 cm</option>
            <option value="25">25 cm</option>
            <option value="30">30 cm</option>
            <option value="35">35 cm</option>
        </select>
        </form>
      <div className="class">
        <div className="title">{props.title}</div>
        <div className="info">{props.text}</div>
        <div className="price">{props.price}</div>
      </div>
      <div className="select">
        <button onClick={minus}>-</button>
        <span>{quantity}</span>
        <button onClick={plus}>+</button>
        <button className="btn" onClick={displayAlert}>
          Сделать заказ
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;