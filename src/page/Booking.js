import React from "react";

import {getFirestore} from "@firebase/firestore"
import {collection,updateDoc} from 'firebase/firestore'
import app from "../firebase";
import { doc } from "firebase/firestore";



const booking = async(id)=>{
    const collectionRef = collection(getFirestore(app), 'rooms')
    try {
        
    await updateDoc(doc(getFirestore(app),"rooms",id), {Current_value:false})
    } catch (error) {

console.log(error);
        ///throw `throw occured ${error}`
    }


}
export default booking