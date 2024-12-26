import { useEffect, useState } from "react";
import Tours from "./Tours";
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);
    const resopnce = await fetch(url);
    const tours = await resopnce.json();
    setLoading(false);
    setTours(tours)
    console.log(tours);

  }
 const removeTour = (id)=>{

const newtours = tours.filter((tour)=>  tour.id != id);
setTours(newtours);

 }
  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {

    return (<>
      <h3> Loading.... </h3>
    </>)
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return <main>
   
    <Tours tours={tours} removeTour={removeTour} />

  </main>
};
export default App;
