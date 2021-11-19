import React from 'react'
export default function Users({currentUsers,loading}){
    if(loading)
        {
            <h1>Loading</h1>
        }
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
                  {currentUsers.map((item,index)=>
                    <tbody>
                    <tr key={index}>     
                     <td className="p-5" > {item.id}</td>
                     <td className="p-5"> {item.first_name}</td>
                     <td className="p-5"> {item.last_name}</td>
                     <td className="p-5"> {item.email}</td>
                     
                     <td className="p-3"><img className="rounded-circle"src= {item.avatar} alt="pic1" height="80vh" width="50%"  /></td>
                     </tr>
                     </tbody>
                     )}
                    {/*    {userli1.map((item)=>
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
                     {userli2.map((item)=>
                        <tbody>
                        <tr>     
                         <td className="p-5" key={item.id}> {item.id}</td>
                         <td className="p-5" key={item.id}> {item.first_name}</td>
                         <td className="p-5" key={item.id}> {item.last_name}</td>
                         <td className="p-5" key={item.id}> {item.email}</td>
                         <td className="p-3" key={item.id}><img className="rounded-circle h-5 w-10"src= {item.avatar} alt="pic1" height="80vh" width="50%"   /></td>
                         </tr>
                         </tbody>
                     )} */}
                    
        </table>
        
         
        </div>
    )
}