/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";

const counterContainer = css`
  display: flex;
  justify-content: flex-start;
  margin: 30px 0;
`;

const counterButton = css`
  background: #EE8263;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  width: 50px;
  font-weight: bold;
  font-size: 20px;
`;

const counterNumber = css`
  font-size: 26px;
  margin: 0 10px;
`;

const submitButton = css`
  background: #EE8263;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 20px;
`;

function ItemCount(props) {
  const [stock, setStock] = useState(props.stock);
  const [units, setUnits] = useState(0);

  const handleButton = {
    sumar: () => {
      if (units > props.stock) {
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
        <h2>Stock disponible:</h2>
        <p>Cantidad: {stock}</p>
      </div>
      <div css={counterContainer}>
        <button css={counterButton} onClick={handleButton.restar} disabled={stock === 0}>
          -
        </button>
        <p css={counterNumber}>{units}</p>
        <button css={counterButton} onClick={handleButton.sumar}>+</button>
      </div>
      <div>
        <button
          css={submitButton}
          onClick={() => {
            props.onAdd({ units });
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
