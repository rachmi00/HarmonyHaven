import React from "react";
import booking from "./Booking";
import {getFirestore} from "@firebase/firestore"
import {collection,getDocs} from 'firebase/firestore'
import { useEffect, useState } from "react";
import app from "../firebase";

const Book=()=>{

     const [fetchedData, setFetchedData] = useState([]);
     const collectionRef = collection(getFirestore(app), 'rooms')
     useEffect(()=>{
        const fetchData = async ()=>{
            try{
               
                const data = await getDocs(collectionRef);
                setFetchedData(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
            }
            catch (error){
                console.error('error fetching', error)
            }
        };
        fetchData();
     }, []);
    
    return(
    <div>
    {fetchedData.map((fetchedData)=> {
        console.log(fetchedData.image);
        return <div>
        <h2>name:{fetchedData.name}</h2>
        <h2>capacity:{fetchedData.Capacity}</h2>
        <img
            src={fetchedData.images[0]}
            class="img-fluid rounded-top"
            alt=""
        />
        
        <h2>type:{fetchedData.type}</h2>
        <h2>price:{fetchedData.rent}</h2>
        <h2>book_state:{fetchedData.Current_bookings}</h2>
        <h2>description:{fetchedData.description}</h2>
        <button onClick={()=>booking(fetchedData.id)}>book now</button>

    </div>
    }
    )}

    </div>
    )

}
export default Book