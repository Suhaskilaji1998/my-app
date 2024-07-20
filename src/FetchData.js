
import React, { useEffect, useState } from 'react'
const userData="https://jsonplaceholder.typicode.com/posts";
 
const Getdata =()=>{
    const [user , SetUser]=useState([]);
    const Handlevent = async ()=>{
        const response = await fetch(userData);
        const postdata = await response.json();
        SetUser(postdata);
    }
    useEffect(()=>{
        console.log(Handlevent());
    },[])
    
    return(
        <div>{user.map(()=>{
            return(
                <div>
                <table>
                    <trow><thead>UserID</thead>
                    <thead>ID</thead>
                    <thead>Title</thead>
                    <thead>Body</thead></trow>
                    <trow><tbody>{user.userId}</tbody></trow>
                    <trow><tbody>{user.id}</tbody></trow>
                    <trow><tbody>{user.title}</tbody></trow>
                    </table>
                </div>
            )
        })}</div>
    )
}
export default Getdata;