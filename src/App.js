import React from "react";
import { apiUrl, filterData } from "./data";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import AllCards from "./Components/AllCards";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoding] = useState(true);

  const[category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    setLoding(true)
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const ouput = await res.json();

        //save data into a variable
        setCourses(ouput.data);

      }
      catch {
        toast.error('Somthing went wrong');

      }
    }
    setLoding(false)

    fetchData();
  }, []);



  return (
    <div className="min-h-screen flex flex-col bg-teal-800">
      <div>
        <NavBar />
      </div>

      <div className=" ">
        <div>
          <Filter filterData={filterData} 

          category={category}
          setCategory={setCategory}
      
          
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">

          {
            loading ? (<Spinner />) : (<AllCards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  )
};

export default App;
