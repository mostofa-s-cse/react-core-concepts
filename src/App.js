import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const users = ['root user','Akil Ahmed','Razzak'];
  const product = [
    {name:'Photshop',price:'$90.0'},
    {name:'Illustrator',price:'$190.0'},
    {name:'PDF Reader',price:'$290.0'},
    {name:'Adobe Photoshop',price:'$290.0'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img style={{width:'100px'}} src={logo} className="App-logo" alt="logo" />
        
        <h1>React Core Concepts</h1>

        <Person name="Root User"></Person>
        <Person name="Akil Ahmed"></Person>

        <Person name={users[2]}></Person>

        <ul>
          {users.map(users => <li>{users}</li>)}
        </ul>
      <Counter></Counter>
       <Users></Users>

       
      </header>
      <main>
        <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product>
        {
          product.map(pd => <Product product={pd}></Product>)
        }
      </main>
        
    </div>
  );
}


function Person(props){
  return(
    <div>
      <p>User Name: {props.name}</p>
    </div>
  )
}


function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'150px',
    width:'250px',
    float:'left',
    color:'#000',
    margin:'15px'
  };
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Counter(){
  const [count,setCount]= useState(0);
  return (
   <div>
    <h1>Count Number : {count}</h1>
    <button style={{marginRight:'10px'}} onClick={() => setCount(count+1)} >Increase</button>
      <button onClick={() => setCount(count-1)}>decrease</button>
      <hr />
   </div>
  )
}

function Users(){
  const [users,setUsrs] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsrs(data))
  },[])
  
  return(
    <div>
      <h3>Dynamic User : {users.length}</h3>
      <hr />
     <ul>
      {
        users.map(user => <li>
          <h2>User Name : {user.name} </h2>
          <p>User Email: {user.email}</p>
          <p>User Address : {user.address.city}</p>
          
          </li>)
      }
     </ul>
    </div>
  )
}


export default App;
