import React, { useState } from "react";

function ItemCount(props) {
  const [stock, setStock] = useState(props.stock);
  const [units, setUnits] = useState(0);

  const handleButton = {
    sumar: () => {
      if (units === stock) {
        alert("no podes seleccionar mas");
      } else {
        setUnits(units + 1);
        setStock(stock - 1);
      }
    },
    restar: () => {
      if (units === 0) {
        alert("no podes seleccionar menos de 0");
      } else {
        setUnits(units - 1);
        setStock(stock + 1);
      }
    },
  };
  return (
    <div>
      <div>
        <p>Stock disponible: {stock}</p>
      </div>
      <div>
        <button onClick={handleButton.restar} disabled={stock === 0}>
          -
        </button>
        <p>{units}</p>
        <button onClick={handleButton.sumar}>+</button>
      </div>
      <div>
        <button onClick={()=>{props.onAdd({units})}}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
