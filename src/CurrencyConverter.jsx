import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { CurrencyConverter } from "./AppSlice";

function Currencyconverter() {
  const [amount1, setAmount] = useState('');
  const [currency1, setCurrency] = useState('');
  const dispatch = useDispatch();
  //const {amount} = useSelector((state) => state.user);
 
  function handleSubmit(e) {
    e.preventDefault(); 
    console.log(amount1, currency1);
    if (!amount1 || !currency1) {
      throw new Error("Please Enter the Amount and The Currency Type");
    } else {
      dispatch(CurrencyConverter({ amount1, currency1 }));
      console.log("Sending Data");
    }
  }
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter Amount to Convert" value={amount1} onChange={(e) => setAmount(e.target.value)}></input>
        <select value={currency1} onChange={(e) => setCurrency(e.target.value)}>
          <option value='USD'>US Dollar</option>
          <option value='EUR'>Euro</option>
          <option value='GBP'>British Pound</option>
        </select>
        <button type="submit">Convert Amount</button>
      </form>   
    </div>
    </>
  );
}

export default React.memo(Currencyconverter);
