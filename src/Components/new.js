import React,{useEffect,useState} from "react";
export default function Header(){

    const[data,setData] = useState([]);

    useEffect(() =>{
        fetch ('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => setData(res.data))
    }, []); 
    return(
        <div className="container">
          <h1>Fetch Data from API</h1>
          
             {data.map((item)=>
                 <div className="row ">
                     <div className="col"> {item.id}</div>
                     <div className="col"> {item.first_name}</div>
                     <div className="col"> {item.last_name}</div>
                     <div className="col"> {item.email}</div>
                     <div className="col" key={item.id}><img className="rounded-circle"src= {item.avatar} alt="pic1" /></div>
                     
                </div>
           )}  
        
        </div>
    )
}