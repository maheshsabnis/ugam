import logo from './logo.svg';
import './App.css';
import SecondChildComponent from './secondchildcomponent';
/* Using the 'props' the values will be collected 
 from the parent
*/
function App(props) {
  return (
     <div className='container'>
        <h2>The First Component</h2>
        <div className='container'>
           <strong>
             <p>
              Message Received from Parent :{props.msg}
             </p>
           </strong>
        </div>
        <FirstChildComponent msg1={'Hello Mr. First Child'}/>
        <br/>
        <SecondChildComponent msg1={'Hello Mr. Second Child'}/>
     </div>
  );
}

function FirstChildComponent(props){
   return (
    <div className='container'>
      <h2>The First hild Component</h2>
      <div className="container">
          <strong>
             I am the First Child 
             <br/>
             {props.msg1}
          </strong>
      </div>
    </div>
   );
}

export default App;
