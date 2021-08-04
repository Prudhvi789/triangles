import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const date = new Date();

    return(
    <div style={{ height : 100+'vh }}>
        <div className="heading">
          <p className="date">{date.getDate()+' - '+date.getMonth()+' - '+date.getFullYear()}</p>
          <h1>Triangles</h1> 
          <p>Maths class</p>
        </div>
        <div className="link-box">
          <div onClick={()=>history.push('/angles')}>
            Angles of Triangle?
          </div>
          <div onClick={()=>history.push('/area')}>
            Calculate Area    
          </div>
          <div onClick={()=>history.push('/hypotenuse')}>
            Check hypotenuse    
          </div>
          <div onClick={()=>history.push('/quiz')}>
            Take a Quiz    
          </div>
        </div>  
    </div>
    )
}

export default Home;
