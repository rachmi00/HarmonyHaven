import Styles from './room.module.css';
import { CiUser } from "react-icons/ci";
import { LuBedDouble } from "react-icons/lu";

export default function Room({title,images,bedCount,personCount,description,price,checkin,checkout}) {
    function returnPeople(persons) {
        if (persons>1) {
            return(<><CiUser className={Styles.icon}/><span> {persons} People</span></>)
        }else {
            return (<><CiUser className={Styles.icon}/><span> {persons} Person</span></>)
        }
    }
    function returnBeds(beds) {
        if (beds>1) {
            return(<><LuBedDouble className={Styles.icon}/><span>{beds} Beds</span></>)
        }else {
            return (<><LuBedDouble className={Styles.icon}/><span>{beds} Bed</span></>)
        }
    }
    function isAvailable (checkout,checkin) {
        if(checkout||checkin){
            return(<>
                <div className={Styles.taken}>Taken until<br/> {checkout}</div>
            </>)
        }else {
            return(
                <>
                    <div className={Styles.available}>Availble</div>
                </>
            )
        }
    }
    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.image}>
                    <img src={images[0]} alt="room" />
                </div>
                <div className={Styles.detailsBox}>
                    <div>{title}</div>
                    <div>{description}</div>
                    <div>
                        <div>
                            {/* <CiUser className={Styles.icon}/>
                            <span>Person(s)</span> */}
                            {personCount&&returnPeople(personCount)}
                        </div>
                        <div>
                            {/* <LuBedDouble className={Styles.icon}/>
                            <span>Bed(s)</span> */}
                            {bedCount&&returnBeds(bedCount)}
                        </div>
                    </div>
                </div>
                <div>   
                    {isAvailable(checkout,checkin)}
                    <h3 className={Styles.price}>${price}</h3>
                    {!(checkin||checkout) && <span className={Styles.button}>Book now</span>}
                </div>
            </div>
        </>
    )
}