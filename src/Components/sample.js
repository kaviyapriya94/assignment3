
import React,{useEffect,useState} from "react";
import axios from 'axios'

export default function Header(){

    const[userlist1,setUserList1] = useState([]);
    const[userlist2,setUserList2] = useState([]);
    const[loading,setLoading]=useState(false)
    const[currentPage,setCurrentPage]=useState(1);
    const[postPerPage,setPostPerPage]=useState(6);

    useEffect(() =>{
        axios.get('https://reqres.in/api/users?page=1')
        .then(res=>setUserList1(res.data.data));
        axios.get('https://reqres.in/api/users?page=2')
        .then(res2=>setUserList2(res2.data.data));
        setLoading(false);
   
    }, []); 
    return(
        <div className="container">
          <h1 className="text-primary text-center pb-5 pt-3">Fetch Users list from API</h1>
              <table className="table table-dark  text-center">
                  <thead>
                      <tr >
                        <th className="p-5">ID</th>
                        <th className="p-5">FIRST_NAME</th>
                        <th className="p-5">LAST_NAME</th>
                        <th className="p-5">EMAIL</th>
                        <th className="p-5 SIZE-5">AVATAR</th>
                      </tr>
                  </thead>
                  
                        {userlist1.map((item)=>
                    <tbody>
                    <tr>     
                     <td className="p-5" key={item.id}> {item.id}</td>
                     <td className="p-5" key={item.id}> {item.first_name}</td>
                     <td className="p-5" key={item.id}> {item.last_name}</td>
                     <td className="p-5" key={item.id}> {item.email}</td>
                     
                     <td className="p-3" key={item.id}><img className="rounded-circle"src= {item.avatar} alt="pic1" height="80vh" width="50%"  /></td>
                     </tr>
                     </tbody>
                     )}
                     {userlist2.map((item)=>
                        <tbody>
                        <tr>     
                         <td className="p-5" key={item.id}> {item.id}</td>
                         <td className="p-5" key={item.id}> {item.first_name}</td>
                         <td className="p-5" key={item.id}> {item.last_name}</td>
                         <td className="p-5" key={item.id}> {item.email}</td>
                         <td className="p-3" key={item.id}><img className="rounded-circle h-5 w-10"src= {item.avatar} alt="pic1" height="80vh" width="50%"   /></td>
                         </tr>
                         </tbody>
                        )} 
                    
        </table>
        
         
        </div>
    )
}
