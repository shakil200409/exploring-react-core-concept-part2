import './App.css'

function App() {
  function handleClick(){
    alert('button-1 Clicked');
  }
  const handleClick2 = ()=>{
    alert('Button 2 Clicked');
  }
  return (
    <>
    <h2>Exploring React Part-2</h2>
    
    {/* Outer function declared with function keyword */}
    <button onClick={handleClick}>Button-1</button>

    {/* Outer Arrow function */}
    <button onClick={handleClick2}>Button-2</button>

    {/* Anonymus Function */}
    <button onClick={() => alert('Button 3 Clicked')}>Button-3</button>
    </>
  )
}

export default App
