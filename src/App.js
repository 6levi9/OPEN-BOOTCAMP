import logo from './logo.svg';
import './App.css';
import ContactList from './components/conteiner/contact_list';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/greetingF';
// import TaskListComponent from './components/conteiner/task_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  {/* componente propio greeting */}
  {/* <Greeting name="Levi"></Greeting> */}
  {/* <GreetingF name={"Levi"} ></GreetingF> */}
  {/* <TaskListComponent></TaskListComponent> */}
     <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
