// import Home from "./Components/Home/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Error from "./Components/Error/Error";
// import Add from "./Components/Add/Add";
// import Details from "./Components/Details/Details";
// import UserDetail from "./Components/UserDetail/UserDetail";
import Navbar from "./Components/Navbar/Navbar";
import MovieModule from "./Modules/movies.module";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MovieModule></MovieModule>
      

      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="users/add" element={<Add />}></Route>
          <Route path="users/:id" element={<UserDetail />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
