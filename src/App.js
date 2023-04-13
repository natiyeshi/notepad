import React,{useState} from 'react';
import Home from './pages/home/Home';
import AddNote from './pages/Write/AddNote';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


export default function App(){
    const [currData,setCurrData] = useState(JSON.parse(localStorage.getItem("userData")))
    let paths = [
    {
      path: "/",
      element: <Home currData={currData} setCurrData={setCurrData}/>,
      errorElement:<div>Not found</div>
    },
    {
        path: "/addNote",
        element: <AddNote currData={currData} setCurrData={setCurrData} />,
    }
    ]
    const router = createBrowserRouter(paths);
    return <RouterProvider router={router}/>
}

