import React,{useEffect,useState} from "react";
import axios from 'axios'
import Users from '../Components/Users.js';
import Pagination from '../Components/Pagination.js';

export default function Header(){

    const[userlist1,setUserList1] = useState([]);
    const[userlist2,setUserList2] = useState([]);
    const[loading,setLoading]=useState(false)
   const[currentPage,setCurrentPage]=useState(1);
   const[usersPerPage]=useState(3);

    useEffect(() =>{
        const fetchUsers= async() =>{
            setLoading(true);
            const res= await axios.get('https://reqres.in/api/users?page=1');
            setUserList1(res.data.data);
            setLoading(false);
            const res2= await axios.get('https://reqres.in/api/users?page=2');
            setUserList2(res2.data.data);
            setLoading(false);
        }
        fetchUsers();
    }, []); 

        
        //.then(res=>setUserList1(res.data.data));
        //axios.get('https://reqres.in/api/users?page=2')
       // .then(res2=>setUserList2(res2.data.data));
       
   
   
        const indexOfLastUser=currentPage * usersPerPage;
        const indexOfFirstUser=indexOfLastUser - usersPerPage;
        const userlists=[...userlist1,...userlist2];
       const currentUsers=userlists.slice(indexOfFirstUser,indexOfLastUser);
       const paginate=pageNumber=>setCurrentPage(pageNumber);
      //  const currentUsers1=userlist1.slice(indexOfFirstUser,indexOfLastUser);
      //  const currentUsers2=userlist2.slice(indexOfFirstUser,indexOfLastUser);
      

    return(
        <div>
            <Users currentUsers={currentUsers} loading={loading} />
           <Pagination usersPerPage={usersPerPage} totalUsers={userlists.length} paginate={paginate}/>
            {/*<Users userli1={currentUsers1} userli2={currentUsers2} loading={loading} />*/}
        </div>
    )
}
