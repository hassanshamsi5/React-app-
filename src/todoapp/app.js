// import React from 'react';
// import { useState, useEffect } from 'react';
// import { db } from '../config/firebase';
// import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query } from 'firebase/firestore';
// import Todo from '../todoapp';
// import { AiOutlinePlus } from 'react-icons/ai'

// const style = {
//   bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
//   container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
//   heading: `text-3xl font-bold text-center text-gray-800 p-2`,
//   form: `flex justify-between`,
//   input: `border p-2 w-full text-xl`,
//   button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
//   count: `text-center p-2`,
// }

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const createTodo = async (e) => {
//     e.preventDefault(e);
//     if (input === '') {
//       alert('Please enter a valid todo');
//       return;
//     }
//     await addDoc(collection(db, 'todos'), {
//       text: input,
//       completed: false,
//     });
//     setInput('');
//   };

//   useEffect(() => {
//     const q = query(collection(db, 'todos'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       let todosArr = [];
//       querySnapshot.forEach((doc) => {
//         todosArr.push({ ...doc.data(), id: doc.id });
//       });
//       setTodos(todosArr);
//     });
//     return () => unsubscribe();
//   }, []);

//   const toggleComplete = async (todo) => {
//     await updateDoc(doc(db, 'todos', todo.id), {
//       completed: !todo.completed,
//     });
//   };


//   const deleteTodo = async (id) => {
//     await deleteDoc(doc(db, 'todos', id));
//   };

//   return (
//     <>
//       {<div className={style.bg}>
//         <div className={style.container}>
//           <h3 className={style.heading}>Todo App</h3>
//           <form onSubmit={createTodo} className={style.form}>
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               className={style.input}
//               type='text'
//               placeholder='Add Todo'
//             />
//             <button className={style.button}>
//               <AiOutlinePlus size={30} />
//             </button>
//           </form>
//           <ul>
//             {todos.map((todo, index) => (
//               <Todo
//                 key={index}
//                 todo={todo}
//                 toggleComplete={toggleComplete}
//                 deleteTodo={deleteTodo}
//               />
//             ))}
//           </ul>
//           {todos.length < 1 ? null : (
//             <p className={style.count}>{`You have ${todos.length} todos`}</p>
//           )}
//         </div>
//       </div>}
//     </>
//   );
// }

// export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import {collection,addDoc,onSnapshot,doc,updateDoc,deleteDoc,query,} from 'firebase/firestore';
import Todo from '../todoapp';
import { AiOutlinePlus } from 'react-icons/ai';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const createTodo = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };
  return (
    <div className="container col-lg-8 col h-screen w-screen bg-gradient-primary to-secondary">
      <div className="bg-gradient-primary to-secondary max-w-500 w-full m-auto rounded-md shadow-lg">
        <h3 className="text-center font-weight-bold text-dark p-2">Todo App</h3>
        <form onSubmit={createTodo} className="d-flex justify-content-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 w-50 h4"
            type="text"
            placeholder="Add Todo"
          />
          <button className="border p-3 ml-2 bg-purple btn btn-dark text-light mx-2">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className="text-center p-2">{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
