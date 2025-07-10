import "./Temp.css"
// export default function Temp({flag}){
//     if(flag) return <h1>Flag is true</h1>
//     else return <h1>Flag is false</h1>

// return flag?<h1>Flag is true</h1>:<h1>Flag is false</h1>

    // return(
    //     <>
    // <h1 className="Temp-Header">Hello !!</h1>
    // </>
    // );

// export default function Temp({flag}){
// if(flag) return <h1>Flag is true</h1>
// }

// export default function Temp(){
//     const handleClick=()=>{
//         alert("Hello World");
//     }
//     const handleSubmit=(name)=>{
//         alert(`Hello ${name}`)
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Click</button>
//             <button onClick={()=>handleSubmit("Smita")}>Submit</button>
//         </div>
//     )
// }


// import { useState } from "react"
// export default function Temp(){
//     const [score,setScore] =useState(0);
//     const updateScore=()=>{
//         setScore(score+1);
//     };
// return <div>
// {score}
// <p>
//     <button onClick={updateScore}>UpdateScore</button>
// </p>
// </div>
    
// }



import { useState } from "react"
export default function Temp(){
    const [score,setScore] =useState(100);
    const reduceScore=()=>{
        setScore(score-1);
    };
return <div>
{score}
<p>
    <button onClick={reduceScore}>reduceScore</button>
</p>
</div>
    
}