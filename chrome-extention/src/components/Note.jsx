

const Note =(props)=>{

const { id, title, text} = props;
console.log( "props", props);

    return (

        <div className="note-item" id="id">
            <h5 className="title">{title}</h5>
            <p className="disciption">{text}</p>

        </div>
    )
}

export default Note;