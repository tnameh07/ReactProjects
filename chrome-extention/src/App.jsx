import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './components/InputForm';
import Notes from './components/Notes';
import { v4 as uuid } from 'uuid'



function App() {

  const [notes, setNotes] =useState([]);


  const handleSubmit =(e)=>{
    e.preventDefault();
    const id = uuid();
    console.log("Handle submit clicked" , " uid :", id);
      // Get form data
      const form = new FormData(e.currentTarget);
      console.log(form);
      
      const title = form.get('title');
      const text = form.get('text-area');
   console.log(title , " :", text);

   const newentry =Object.fromEntries(form);
   console.log( "form enteries",newentry);
   
      // Check if both title and text are provided
    if (title && text) {
      // Add the new note to the notes state
      const newNote = { id,title, text };
      setNotes([...notes, newNote]);
    }else {
      console.log("Please fill in both fields.");
    }
    e.currentTarget.reset();

  }
  return (
    <>
   <div className="form-container">
         <form className='form' onSubmit={handleSubmit} >

         <h5>Write something interesting ....</h5>
        <input type="text" name='title' id='title' placeholder='enter title' />
        <br />
            <textarea name="text-area" id='text-box' placeholder='write something interesting'></textarea>
            <button className='btn' type='submit'>add note</button>
         </form>
  </div>
   <Notes notes={notes}/>
    </>
  
  )
}

export default App
