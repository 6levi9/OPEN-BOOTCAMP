import logo from './logo.svg';
import './App.css';
import Lifecycle from './lifecycle/lifecycle';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import './style/main.scss'
// import ContactList from './components/conteiner/contact_list';

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
     {/* <ContactList></ContactList> */}
{/* <Ejemplo1></Ejemplo1> */}
{/* <Ejemplo2></Ejemplo2> */}
{/* <MiComponenteConContexto></MiComponenteConContexto> */}
<Lifecycle></Lifecycle>
      </header>
    </div>
  );
}
export default App;

