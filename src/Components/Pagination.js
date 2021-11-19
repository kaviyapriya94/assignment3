import React from 'react';
export default function Pagination({usersPerPage,totalUsers,paginate}){
    const PageNumbers=[];

    for(let i=1; i<=Math.ceil(totalUsers/usersPerPage); i++)
    {
        PageNumbers.push(i);
    }
    return(
        <div>
            <nav>
                <ul className="pagination">
                    {PageNumbers.map(number=>
                    <li key={number} className="page-item " >
                        <a onClick={() =>paginate(number)} href="!#" className="page-link bg-primary text-white">{number}</a>
                    </li>

                    )

                    }

                </ul>
            </nav>
        </div>
    )
}