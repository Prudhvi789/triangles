import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'

let sideOne = 0;
let sideTwo = 0;
let sideThree = 0;

const Area =()=> {
    const [result,setResult] = React.useState();
    const history = useHistory();
    
    const handler = () => {
        let s=0;
        if(sideOne && sideTwo && sideThree){
            s = (sideOne + sideThree + sideTwo) / 2;
            const area = Math.sqrt( s * (s - sideOne) * (s - sideTwo) * (s - sideThree) );
            setResult('Area is '+area)
        }
        else{
            alert('enter numbers')
        }
    }

    return(
    <>
    <button onClick={()=>history.push('/')} style={{position: 'fixed',left: 0}}>Back</button>      
    <div className="container">
        <h2>
        Calculate Area
        </h2>
        <h4>Enter three sides values</h4>
        <form id="form">
            <input onChange={(event)=>{sideOne=parseInt(event.target.value)}}></input>
            <input onChange={(event)=>{sideTwo=parseInt(event.target.value)}}></input>
            <input onChange={(event)=>{sideThree=parseInt(event.target.value)}}></input>
        </form>
        <button onClick={handler}>Submit</button>
        <div id="result">
            {result}
        </div>
        <div className="footer"> Note: As per Heron's formula, the value of the area of any triangle having lengths,
             a, b, c, perimeter of the triangle, P, and semi-perimeter of the triangle as s is determined using the below-given formula:
             <p>Heron's formula is Area = sqrt( s(s-a)(s-b)(s-c) ) </p>
             <p>where s = ( a + b + c )/2</p> 
        </div>
    </div>
    </>
    )
}

export default Area;