import { useState } from "react";
import Button from "./Button";
import Empty from "./Empty";

function Calculator() {
  let isEmpty = false;
  let [bill, setBill] = useState(0);
  let [people, setPeople] = useState(1);

  let tip = bill / people;
  let sum = parseInt(tip) + parseInt(bill) / parseInt(people);
  console.log(sum.length);
  if (sum.length > 7) {
    parseFloat(sum).toFixed(2);
  }

  if (bill.length > 7) {
    bill = "";
  }
  if (bill.length === 0) {
    tip = 1;
    bill = "";
  }
  if (bill.length < 1 || people.length < 1) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }

  function Render() {
    if (isEmpty) {
      return <Empty/>;
    } else {
      return <Button/>;
    }
  }

  return (
    <div>
      <div className="white-box grid grid-cols-2">
        <div className="input-box">
          <form>
            <label for="bill">
              <p className="right-text">Bill</p>
              <i id="dollar"></i>
              <input 
                className="input"
                type="text"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="0"
              />
            </label>
            <label for="tip">
              <p className="right-text pt-16">Select Tip %</p>
              <div className="grid grid-cols-3 grid-rows-2 gap-3">
                <button className="percentage">5%</button>
                <button className="percentage">10%</button>
                <button className="percentage">15%</button>
                <button className="percentage">25%</button>
                <button className="percentage">50%</button>
                <button className="custom">Custom</button>
              </div>
            </label>
            <label for="people">
              <p className="right-text pt-16">People</p>
              <i id="person"></i>
              <input
                className="input"
                type="text"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                placeholder="0"
              />
            </label>
          </form>
        </div>
        <div className="green-box">
          <div className="part">
            <p className="main">
              Tip Amount
              <p className="side">/ person</p>
            </p>
            <div className="tip">
              <p>${parseFloat(bill).toFixed(2)}</p>
            </div>
          </div>
          <div className="part">
            <p className="main">
              Total
              <p className="side">/ person</p>
            </p>
            <div className="sum">
              <p>${parseFloat(sum).toFixed(2)}</p>
            </div>
          </div>
          <Render isEmpty={false}></Render>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
