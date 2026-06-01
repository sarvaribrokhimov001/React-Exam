import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EditModal = ({editId, setEditModal}) => {
  const [editTodo , setEditTodo] = useState({
    todo : ""
  });

    useEffect(() => {
      axios.get(`http://localhost:3000/todos/${editId}`).then((res) => {
        setEditTodo(res.data);
      });
    }, [editId]);

  const handleChange = (e) => {
    setEditTodo({
      ...editTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/todos/${editId}`, editTodo).then((res) => {
      setEditModal(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='w-full h-screen absolute top-0 left-0 backdrop-blur-2xl flex'>
        <form className='w-[470px] h-[450px] flex flex-col justify-center items-center m-auto border border-gray-500 bg-black rounded-[30px] 
           gap-[12px] pt-[20px]' onSubmit={handleSubmit}>
              <input 
                className='rounded-[10px] bg-black text-red-500 focus:text-green-500 p-2 border border-red-700 w-[390px] h-[60px]' 
                onChange={handleChange} 
                type="text" 
                name="todo"
                value={editTodo.todo}
              />
            <div className='flex gap-[20px] mt-[40px]'>
                <button className='w-[100px] h-[40px] rounded-[15px] bg-black text-red-500 text-[18px] border-[5px] border-red-500 shadow-[0_4px_12px_rgba(255,0,0,0.5)] 
                    transition-all duration-400 ease-in-out hover:bg-red-500 hover:text-white hover:border-white active:bg-black active:text-red-500 
                    active:border-red-500 active:shadow-[0_4px_12px_rgba(255,0,0,0.5)]'
                > Cancel </button>
                <button className='w-[100px] h-[40px] rounded-[15px] bg-black text-green-500 text-[18px] border-[5px] border-green-500 shadow-[0_4px_12px_rgba(0,128,0,0.5)] 
                    transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:border-white active:bg-black active:text-green-500 
                    active:border-green-500 active:shadow-[0_4px_12px_rgba(0,128,0,0.5)]'
                > Submit </button>
            </div>
        </form>
    </div>
  )
}
export default EditModal