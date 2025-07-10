import "./Home.css"
export default function Home(props){
  let id =12345
  return (
  <>
    <h1 style={{backgroundColor: "orange", color:"blue"}}>Hello {props.name}, You are {props.age} years old.</h1>
    <h2 className="App-Home-Header">Your student id is {id}</h2>
  <p>Lorem ipsum dolor sit amet.</p>
  </>
  );
}