import avtar from '../../assets/image.png'

const Person =({id, name , nickName ,images})=>{

// const img = images && images[0] && images[0].small && images[0].small.url || avtar;
const img = images?.[0]?.small?.url || avtar
    return(
       <div className="indivsual-person">
<h3> {name} -{nickName}</h3>
<img src={img} alt={name} style={{ width: '50px' }}/>

       </div>
    )
}

export default Person;