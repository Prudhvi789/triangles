import React from "react";
import { useHistory } from "react-router-dom";

const formReducer = (state, event) => {
    if(event.reset) {
        return {}
    }
    return {
      ...state,
      [event.name]: event.value
    }
   }

const Quiz = () => {

    const [formData, setFormData] = React.useReducer(formReducer, {});
    const [submitting, setSubmitting] = React.useState(false);
    const [score,setScore] = React.useState();
    const history = useHistory();
    const answers = {
        q1: "option1",
        q2: "option2",
        q3: "option1",
        q4: "option3",
        q5: "option3",
        q6: "option2"
    }

    const handleChange = (event) => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
        });
    }   

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmitting(true);

        let c = 0;
        for(let x in formData){
            if(formData[x] === answers[x]){  
                c++;
            }
        }
        setScore(c)
    
        setTimeout(() => {
          setSubmitting(false);
        }, 1000);
    }

    const resetHandler =(event)=>{
        event.preventDefault();
        setScore();
        setFormData({
            reset: true
          })
    }

    return(
        <>
        <button onClick={()=>history.push('/')} style={{position: 'fixed',left: 0}}>Back</button>   
        <div className="container">
            {
              submitting ?
                <div>Submtting Answers...</div>
             :
             <>       
            <form>
                <div>
                    <p>1. If a triangle has angles 135<sup>0</sup>, 15<sup>0</sup>, 30<sup>0</sup>. Is it an obtuse triangle?</p>
                    <input type="radio" id="q11" name="q1" value="option1" onChange={handleChange} />
                    <label htmlFor="q11">yes  </label>
                    <input type="radio" id="q12" name="q1"  value="option2" onChange={handleChange} />
                    <label htmlFor="q12">no</label>
                </div>
                <div>
                    <p>2. If a triangle has angles  115<sup>0</sup>, 25<sup>0</sup>, 40<sup>0</sup>. Is it an acute triangle?</p>
                    <input type="radio" id="q21" name="q2" value="option1" onChange={handleChange} />
                    <label htmlFor="q21">yes </label>
                    <input type="radio" id="q22" name="q2"  value="option2" onChange={handleChange} />
                    <label htmlFor="q22">no</label>
                </div>
                <div>
                    <p>3. If a triangle has 2 sides with equal lengths and 60<sup>0</sup> angle between them. What is the type of triangle?</p>
                    <input type="radio" id="q31" name="q3" value="option1" onChange={handleChange} />
                    <label htmlFor="q31">Equilateral </label>
                    <input type="radio" id="q32" name="q3"  value="option2" onChange={handleChange} />
                    <label htmlFor="q32">Isosceles </label>
                    <input type="radio" id="q33" name="q3"  value="option3" onChange={handleChange} />
                    <label htmlFor="q33">Both</label>
                </div>
                <div>
                    <p>4. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?</p>
                    <input type="radio" id="q41" name="q4" value="option1" onChange={handleChange} />
                    <label htmlFor="q41">Equilateral </label>
                    <input type="radio" id="q42" name="q4"  value="option2" onChange={handleChange} />
                    <label htmlFor="q42">Isosceles </label>
                    <input type="radio" id="q43" name="q4"  value="option3" onChange={handleChange} />
                    <label htmlFor="q43">Scalene </label>
                </div>
                <div>
                    <p>5. The perimeter of an equilateral triangle is 15cm. What is the length of one side?</p>
                    <input type="radio" id="q51" name="q5" value="option1" onChange={handleChange} />
                    <label htmlFor="q51">15cm </label>
                    <input type="radio" id="q52" name="q5"  value="option2" onChange={handleChange} />
                    <label htmlFor="q52">45cm </label>
                    <input type="radio" id="q53" name="q5"  value="option3" onChange={handleChange} />
                    <label htmlFor="q53">5cm </label>
                </div>
                <div>
                    <p>6. If a triangle has 2 sides with equal lengths and 75<sup>0</sup> angle between them. What is the type of triangle?</p>
                    <input type="radio" id="q61" name="q6" value="option1" onChange={handleChange} />
                    <label htmlFor="q61">Equilateral </label>
                    <input type="radio" id="q62" name="q6"  value="option2" onChange={handleChange} />
                    <label htmlFor="q62">Isosceles </label>
                    <input type="radio" id="q63" name="q6"  value="option3" onChange={handleChange} />
                    <label htmlFor="q63">Right Angle traingle </label>
                </div>
                <button onClick={submitHandler}>Submit</button>
                <button onClick={resetHandler}>Reset</button>
            </form>
            <div id="result">{score !== undefined ? 'Score is '+score : null}</div>
            </>
            }
        </div>
    </>    
    )
}

export default Quiz;