// import React, {useRef, useState } from 'react'
// import { Data } from '../Assets/Data'

// const Quiz = () => {

//     let[index, setIndex] = useState(0);
//     let[Question, setQuestion] = useState(Data[index]);
//     let[lock, setLock] = useState(false);
//     let[score, setScore] = useState(0);
//     let[result, setResult] = useState(false);


    
//     let Option1 = useRef(null);
//     let Option2 = useRef(null);
//     let Option3 = useRef(null);
//     let Option4 = useRef(null);

//     let option_array = [Option1, Option2, Option3, Option4];


//     const checkAns =(e, Ans)=>{
//         if(lock===false){
//             if(Question.Ans===Ans){
//             e.target.classList.add("correct");
//             setLock(true);
//             setScore(prev=>prev+1)

//         }
//         else{
//             e.target.classList.add("wrong");
//             setLock(true);
//             option_array[Question.Ans-1].current.classList.add("correct");



//         }



//         }

//     }

//     const next = () =>{
//         if(lock===true){
//             if(index===Data.length - 1){
//                 setResult(true);
//                 return 0;

//             }
//             setIndex(++index);
//             setQuestion(Data[index]);
//             setLock(false);
//             option_array.map((Option)=>{
//                 Option.current.classList.remove("wrong");
//                 Option.current.classList.remove("current");
//                 return null;


//             })

            


//         }

//         const reset = () =>{
//             setIndex(0);
//             setQuestion(Data[0]);
//             setScore(0);
//             setLock(false);
//             setResult(false);
//         }
//     }

//   return (
//     <div className='container'>
//     <h1>Quiz App</h1>
//     <hr />
//     {result?<></>:<>
//     <h2>{index + 1}. {Question.Question}</h2>
//     <ul>
//         <li useRef={Option1} onClick={(e)=>{checkAns(e, 1)}}>{Question.Option1}</li>
//         <li useRef={Option2} onClick={(e)=>{checkAns(e, 2)}}>{Question.Option2}</li>
//         <li useRef={Option3} onClick={(e)=>{checkAns(e, 3)}}>{Question.Option3}</li>
//         <li useRef={Option4} onClick={(e)=>{checkAns(e, 4)}}>{Question.Option4}</li>
//     </ul>
//     <button onClick={next}>Next</button>
//     <div className="index">{index+1} of {Data.length} questions</div>

//     </>}
//     {result?<>
//         <h2>Your score {score} out of {Data.length}</h2>
//     <button onClick={reset}>Reset</button>


//     </>:<></>}
      
//     </div>
//   )
// }

// export default Quiz
import React, { useRef, useState } from 'react';
import { Data } from '../Assets/Data';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [Question, setQuestion] = useState(Data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, Ans) => {
        if (!lock) {
            if (Question.Ans === Ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[Question.Ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (lock) {
            if (index === Data.length - 1) {
                setResult(true);
                return;
            }
            setIndex(prevIndex => prevIndex + 1);
            setQuestion(Data[index + 1]);
            setLock(false);
            option_array.forEach(option => {
                if (option.current) {
                    option.current.classList.remove("wrong", "correct");
                }
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(Data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {result ? (
                <>
                    <h2>Your score {score} out of {Data.length}</h2>
                    <button onClick={reset}>Reset</button>
                </>
            ) : (
                <>
                    <h2>{index + 1}. {Question.Question}</h2>
                    <ul>
                        <li key="1" ref={Option1} onClick={(e) => checkAns(e, 1)}>{Question.Option1}</li>
                        <li key="2" ref={Option2} onClick={(e) => checkAns(e, 2)}>{Question.Option2}</li>
                        <li key="3" ref={Option3} onClick={(e) => checkAns(e, 3)}>{Question.Option3}</li>
                        <li key="4" ref={Option4} onClick={(e) => checkAns(e, 4)}>{Question.Option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {Data.length} questions</div>
                </>
            )}
        </div>
    );
};

export default Quiz;

