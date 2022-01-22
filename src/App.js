import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { getPosts } from "./Actions";

function App() {
  const [curr_Id, setcurr_Id] = useState(null);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getPosts());
  },[curr_Id,dispatch])
  
  return (
    <div className="App">
      <Navbar curr_Id={curr_Id} setcurr_Id={setcurr_Id}/>
      <Posts setcurr_Id={setcurr_Id}/>
    </div>
  );
}

export default App;
