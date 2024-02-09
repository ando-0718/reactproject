import React from 'react'
import { useState, useRef } from 'react'
import { v4 as uuidv4 } from "uuid";

function Text() {

    const [texts, setTexts] = useState([]);

    const textdata = useRef();

    const ClickAdd = () => {
        const textValue = textdata.current.value;
        if(textValue === "") return;
        setTexts((message) => {
            return [...message, { id: uuidv4, textValue: textValue, }];
        })
        textdata.current.value = null;
    }
  return (
    <div>
        <div>
            {texts.map((textonly) => (<h3 key={textonly.id}>{textonly.textValue}</h3>))}
        </div>
        <input type='text' ref={textdata}/>
        <button onClick={ClickAdd}/>
    </div>
  )
}

export default Text