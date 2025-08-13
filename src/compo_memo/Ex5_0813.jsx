import React, { useState, useMemo } from 'react';

const Ex5_0813 = () => {
  const [price, setPrice] = useState(1000);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0.1);

  const total = useMemo(() => {
    console.log("총액계산");
    return price * quantity * (1 - discount);
  }, [price, quantity, discount]);

  return (
    <div>
      <label>
        가격:{" "}
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        수량:{" "}
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        할인율:{" "}
        <input
          type="number"
          step="0.01"
          min="0"
          max="1"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
      </label>

      <h2>총액: {total.toLocaleString()}원 입니다</h2>
    </div>
  );
};

export default Ex5_0813;
