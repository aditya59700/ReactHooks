import logo from './logo.svg';
import './App.css';
import Greet, { GameTest } from './components/Greet';
import Welcome, { Traning } from './components/Welcome';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import GetList from './components/GetList';
import PostList from './components/PostList';
import { Route, Routes } from 'react-router-dom';
import Home from './components/ivp/Home';
import Contact from './components/ivp/Contact';
import About from './components/ivp/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/ivp/OrderSummary';
import NoMatch from './components/ivp/NoMatch';
import Product from './components/ivp/Product';
import NewProducts from './components/ivp/NewProducts';
import Featured from './components/ivp/Featured';
import UseStateHook from './components/Hooks/UseStateHook';
import UseStateHook2 from './components/Hooks/UseStateHook2';
import UseStateHooks2 from './components/Hooks/UseStateHooks2';
import UseEffectHook1 from './components/Hooks/UseEffectHook1';
import UseEffectHook2 from './components/Hooks/UseEffectHook2';
import UseEffectHook3 from './components/Hooks/UseEffectHook3';
import ParentComponent1 from './components/Hooks/ParentComponent1';
import { createContext } from 'react';

//   const name="Aditya"
//   const skills ="React" 
// const nameData = createContext(name)
// const skillsData = createContext(skills)
//if we define variable globally then we can call it without provider directly
const nameData = createContext()
const skillsData = createContext()
function App() {
  let login = false
  const name="Aditya"
  const skills ="React"
  return (
    <div className="App">
      {/* <h2>Welcome to Aditya's World</h2> */}
      {/* <Greet name = "Aditya" game= "fifa"/> */}
      {/* <Greet name = "Rahul" game= "cod"><p>This is child component</p> <button>Click me</button></Greet>
      <Greet name = "Riya" game= "candy crush"/>
      <Welcome name = "Aditya" game= "fifa" >
      <p>This is child component</p> <button>Click me</button>
      </Welcome> */}
      {/* <GameTest />
      <Welcome/>
      <Traning/> */}

      {/* <Message /> */}
{/* 
      <Greet id = "2" name = "Aditya" game= "fifa"/>
      <Welcome name = "Aditya" game= "fifa" /> */}

      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}

      {/* <UserGreeting login = {login}/> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <GetList /> */}
      {/* <PostList /> */}
      <Navbar />
      <h2>IVP Routing</h2>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/getusers' element={<GetList />}></Route>
        <Route path='/order' element={<OrderSummary />}></Route>
        <Route path='/product' element={<Product />}>
          <Route path='featured' element={< Featured />}></Route>
          <Route path='new' element= {<NewProducts />}></Route>
        </Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
      <br></br>
      {/* <UseStateHook /> */}
      {/* <UseStateHook2 /> */}
      {/* <UseStateHooks2 /> */}
      {/* <UseEffectHook1 /> */}
      {/* <UseEffectHook2 /> */}
      {/* <UseEffectHook3 /> */}

      <nameData.Provider value={name}  >
        <skillsData.Provider value={skills} >
      <ParentComponent1 />
      </skillsData.Provider>
      </nameData.Provider>
    </div>
  );
}

export default App;
export {nameData,skillsData}