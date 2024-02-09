"use client"

import React, { useState, useMemo, useCallback } from "react";

const Child_1 = React.memo(() => {
  return (
    <>
      <p>Child_1コンポーネントです。</p>
    </>
  )
});

const Child_2 = React.memo((props: {handleClick: () => void}) => {
  return (
    <>
      <p>Child_2コンポーネントです。</p>
      <button onClick={props.handleClick}>Click</button>
    </>
  )
});

export default function Parent() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleCick = useCallback(() => {
    console.log("click");
  }, []);
  const [count, setCount] = useState(0);
  const double = (count: number) => {
    let i = 0;
    while(i < 100000000) i++;
      return count * 2;
  };
  const doubleCount = useMemo(() => double(count), [count]);

  return (
    <div>
      <p>親コンポーネントです。</p>
      <input type="text" onChange={handleChange} value={text} className="border-2 border-slate-200 rounded-md" />
      <Child_1 />
      <Child_2 handleClick={handleCick}/>
      <p>親コンポーネントで重い計算処理</p>
      <p>
        Counter: {count}, {doubleCount}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment Count2</button>
    </div>
  );
}
