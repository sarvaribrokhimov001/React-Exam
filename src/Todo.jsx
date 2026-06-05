import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditModal from './modal/EditModal';

const Todo = () => {
  const [todo , setTodo] = useState([]);
  const [editId, setEditId] = useState(null); 
  const [editModal , setEditModal] = useState(false);
  const [addTodo , setAddTodo] = useState({
    todo : "",
  });

  const handleChange = (e) => {
    setAddTodo({
      ...addTodo,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3000/todos` , addTodo).then((data) => console.log(data.data))
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/todos`).then((data) => {
      setTodo(data?.data)
    });
  } , [])

  const handleEditModal = () => {
    setEditModal(true)
  }

  const handleDelete = (id) => {
    if(window.confirm('Ishonchingiz komilmi ?')) {
      axios.delete(`http://localhost:3000/todos/${id}`)
      .then(data => {
        console.log(data);
      });
    } else {
      toast.error(`item ni o'chirish imkoni yo'q`);
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-[30px] bg-gray-950">
      <h2 className="text-[40px] font-black mb-6 text-white"> Todo List </h2>
      <div className="flex gap-5 mb-[20px] justify-center items-center">
        { editModal ? ( <EditModal setEditModal={setEditModal} editId={editId} /> ) : null }
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          onChange={handleChange}
          value={addTodo.todo}
          name='todo'
          placeholder="Add new Todo" 
          className="w-[300px] h-[40px] bg-gray-800 rounded-[20px] pl-[25px] focus:bg-black focus:text-red-700 capitalize font-bold text-[18px]" />
      </form>
      <button onClick={handleSubmit}
      className="w-[130px] h-[35px] rounded-[20px] bg-black text-green-600 font-bold border-[5px] text-[17px] border-green-600 hover:bg-green-600 hover:text-white hover: border-[5px] hover:border-white"> +AddBtn </button>
    </div>

      <div>
         <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-800/50 text-xs uppercase tracking-wider text-neutral-500">
                <tr className="transition-colors hover:bg-gray-800/30">
                    <th className="px-6 py-4 font-bold text-center"> T/r </th>
                    <th className='px-6 py-4 font-bold text-center'> Todo </th>
                    <th className="px-6 py-4 font-bold text-center"> Actions </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
                {todo.map(({id , todo})=> (
                  <tr className="transition-colors hover:bg-gray-800/30 font-bold" key={id}>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-300 text-[18px]"> {id} </td>
                    <td className='whitespace-nowrap px-6 py-4 text-gray-300 text-[18px]'> {todo} </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-300">
                      <button onClick={() => {
                        setEditId(id);
                        setEditModal(true)
                      }} className="w-[100px] h-[35px] rounded-[20px] bg-black text-yellow-400 font-bold border-[5px] text-[17px] border-yellow-400 hover:bg-yellow-400 hover:text-white hover:border-[5px] hover:border-white"> Edit </button>
                      <button onClick={() => {
                        handleDelete(id);
                      }}
                      className="w-[100px] h-[35px] rounded-[20px] bg-black text-red-600 font-bold border-[5px] text-[17px] border-red-600 hover:bg-red-600 hover:text-white hover:border-[5px] hover:border-white"> Delete </button>
                    </td>
                  </tr>
        ))}
           </tbody>
        </table>
      </div>
    </div>
  )
}
export default Todo