import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const [date, setdate] = useState(Date().toLocaleString())
  const [Category, setAddCategory] = useState([]);
  
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setdate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  },[])
 
  useEffect(() => {
    console.log(Category); // Verify that the Category state is updated correctly
  }, [Category]);

  return (
    <div className="App">
      <Header date ={date}/>
      <Navbar setAddCategory={setAddCategory}  />
      {Category.map((obj, index) => (

        <Categories key={index} id={obj.id} name={obj.name} setAddCategory={setAddCategory} />
      ))}
    </div>
  )
}

export default App
