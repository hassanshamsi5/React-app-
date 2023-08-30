// import React from 'react';
// import { FaRegTrashAlt } from 'react-icons/fa';

// const style = {
//   li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
//   liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
//   row: `flex`,
//   text: `ml-2 cursor-pointer`,
//   textComplete: `ml-2 cursor-pointer line-through`,
//   button: `cursor-pointer flex items-center`,
// }

// const Todo = ({ todo, toggleComplete, deleteTodo }) => {
//   return (
//     <li className={todo.completed ? style.liComplete : style.li}>
//       <div className={style.row}>
//         <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
//         <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
//           {todo.text}
//         </p>
//       </div>
//       <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
//     </li>
//   )
// }

// export default Todo;

import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
  li: 'd-flex justify-content-between bg-secondary p-4 my-2 text-capitalize',
  liComplete: 'd-flex justify-content-between bg-secondary p-4 my-2 text-capitalize',
  row: 'd-flex',
  text: 'ml-2 cursor-pointer',
  textComplete: 'ml-2 cursor-pointer text-decoration-line-through',
  button: 'cursor-pointer d-flex align-items-center',
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className='container col-10 '>

      <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
          <input
            onChange={() => toggleComplete(todo)}
            type="checkbox"
            checked={todo.completed ? 'checked' : ''}
            className="form-check-input"
          />
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-dark">
          <FaRegTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default Todo;
