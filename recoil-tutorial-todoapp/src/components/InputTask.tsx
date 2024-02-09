import { useCallback } from 'react';
import { inputTitleState } from '../states/inputTitleState';
import './InputTask.css';
import { useRecoilState/*, useRecoilValue, useSetRecoilState*/ } from 'recoil';
import { addTitleState } from '../states/addTitleState';

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
    // const inputTitle = useRecoilValue(inputTitleState);
    // const setInputTittle = useSetRecoilState(inputTitleState);
    const [inputTitle, setInputTittle] = useRecoilState(inputTitleState);
    const [addTitle, setAddTitle] = useRecoilState(addTitleState);

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputTittle(e.target.value);
        }, 
        [inputTitle]);

    const handleClick = () => {
        console.log(inputTitle);
        setAddTitle([...addTitle, {id: getKey(), title: inputTitle}]);
        setInputTittle("");
    }
  return (
    <div className='inputField'>
        <input type='text' className='inputTitle' onChange={onChange} value={inputTitle} />
        <button type='button' className='addButton' onClick={handleClick}>追加</button>
    </div>
  )
}

export default InputTask