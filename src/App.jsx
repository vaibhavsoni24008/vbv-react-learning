
import StudentCard from './StudentCard'
function App() {
  let name = "vaibhav";
  return (
    <div>
      <h1>Hello world {name}</h1>
      <StudentCard name="Vaibhav" email="abc@gmail.com" />
      <StudentCard name="plural" email="cba@gmail.com" />
      <StudentCard name2="singular" email2="xyz@gmail.com" />
    </div>
  );
}

export default App



// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App
