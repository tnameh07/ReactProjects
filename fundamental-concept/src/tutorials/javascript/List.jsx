import { people } from "../../data";
import Person from "./Person";
const List = ()=>{



    return (<>
    <div className="javascript">
<h1>Javascript Demo</h1>

{
    people.map((person)=>{
        return <Person key={person.id} {...person} />
    })
}

    </div>
    
    </>)
}

export default List;