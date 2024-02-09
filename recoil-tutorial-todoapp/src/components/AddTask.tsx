import { useRecoilValue } from 'recoil';
import './AddTask.css';
import { addTitleState, addTitlestateLength } from '../states/addTitleState';

const AddTask = () => {

    const addTitle = useRecoilValue(addTitleState);
    const addTitleLength = useRecoilValue(addTitlestateLength)

  return (
    <div className='taskField'>
        <div>{addTitleLength}個のタスクがあります</div>
        <ul>
            {addTitle.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default AddTask