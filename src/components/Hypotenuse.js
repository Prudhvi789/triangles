import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'

let sideOne = 0;
let sideTwo = 0;

const Hypotenuse =()=> {
    const [result,setResult] = React.useState();
    const history = useHistory();
    
    const handler = () => {
        if(sideOne && sideTwo ){
            const hypotenuse = Math.sqrt( Math.pow(sideOne,2) + Math.pow(sideTwo,2) );
            setResult('Hypotenuse is '+ hypotenuse)
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
            Hypotenuse
            </h2>
            <h4>Enter base and height values</h4>
            <form id="form">
                <input onChange={(event)=>{sideOne=parseInt(event.target.value)}}></input>
                <input onChange={(event)=>{sideTwo=parseInt(event.target.value)}}></input>
            </form>
            <button onClick={handler}>Submit</button>
            <div id="result">
                {result}
            </div>
            <div className="footer">
                Did you know ? : In mathematics, the Pythagorean theorem, or Pythagoras's theorem, 
                is a fundamental relation in Euclidean geometry among the three sides of a right triangle. 
                It states that the area of the square whose side is the hypotenuse 
                is equal to the sum of the areas of the squares on the other two sides.
                <p>c = sqrt( a<sup>2</sup> + b<sup>2</sup> ) </p>
            </div>
        </div>
    </>
    )
}

export default Hypotenuse;