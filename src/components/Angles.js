import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

let angleOne = 0;
let angleTwo = 0;
let angleThree = 0;

const Angles =()=> {
    const [result,setResult] = React.useState();
    const history = useHistory();
    
    const handler = () => {
        if((+angleOne)&&(+angleTwo)&&(+angleThree)){
            (+angleOne)+(+angleTwo)+(+angleThree) === 180 ? setResult("these angles can make a triangle") : setResult('Oops! these angles cannot make a triangle');
        }
        else{
            alert('enter valid angles')
        }
    }

    return(
    <>
    <button onClick={()=>history.push('/')} style={{position: 'fixed',left: 0}}>Back</button>      
    <div className="container">
        <h2>
        Enter the angles in below input boxes and we will tell you if those angles make a Triangle
        </h2>
        <form id="form">
            <input onChange={(event)=>{angleOne=event.target.value}}></input>
            <input onChange={(event)=>{angleTwo=event.target.value}}></input>
            <input onChange={(event)=>{angleThree=event.target.value}}></input>
        </form>
        <button onClick={handler}>Submit</button>
        <div id="result">
            {
                result  
            }
        </div>
        <div className="footer">Note: Sum of interior angles in triangles
            An interior angle is formed by the sides of a polygon and is inside the figure.
            The 3 interior angles in every triangle add up to 180<sup>0</sup></div>
    </div>
    </>
    )
}

export default Angles;