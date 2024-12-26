import Note from './Note'


const Notes =({notes})=>{

console.log(notes);

    return (

        <div className="notes-lists">
{
    notes.map((item )=>{ return <Note key={item.id} {...item}/> })
}
        </div>
    )
}

export default Notes;