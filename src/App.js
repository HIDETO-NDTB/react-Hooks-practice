import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // setCount方法① 単純にcountをいじる
  const increment = () => setCount(count + 1);

  // setCount方法②　引数に元の状態を渡し、それをいじる
  const decrement = () => setCount((prevCount) => prevCount - 1);

  const reset = () => setCount(0);
  const double = () => setCount((prevCount) => prevCount * 2);
  const divide3 = () => setCount((prevCount) => prevCount % 3 === 0 ? prevCount / 3 : prevCount);
  
  return (
    <>
      <div>count: { count}</div>
      <button onClick={ increment }>+1</button>
      <button onClick={decrement}>-1</button>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>×2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App;