import { useState } from "react";




const Tour = ({ id, image, info, name, price, removeTour }) => {
    //  console.log("tour running ", );
    const [readMore, setReadmore] = useState(false);


    return (<article>  <div className="single-tour">
        <img src={image} alt={name} className='img' />
        <span className='tour-price'>${price}</span>
            <div className="tour-info">
                <h5>{name} </h5>
                <p>{
                    readMore ? info : `${info.substring(0, 100)} ....`
                } <button className ="info-btn" onClick={() => setReadmore(!readMore)}>{readMore ? "Show Less" : "ReadMore"}</button>
                </p>
    
    
            </div>
    
            <div className='delete-btn btn-block btn'>
                <button onClick={() => removeTour(id)}>remove tour</button>
            </div>
        </div> </article>
            
    
    )
    
    
}

export default Tour;