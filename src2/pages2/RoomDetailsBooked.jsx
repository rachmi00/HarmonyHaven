import Styles from './roomDetailsBooked.module.css';
import { CiUser } from "react-icons/ci";
import { LuBedDouble } from "react-icons/lu";
import { IoWifiOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useParams } from 'react-router-dom';


export default function RoomDetailsBooked() {
    const initialRoomData = [
        {
          id: 'ds8h48ty98yhew8yhrf',
          title: "H101 - Cozy Single Room",
          price: 46,
          personCount: 1,
          bedCount: 1,
          images: ["https://html.merku.love/hosteller/img/rooms/04.webp"],
          description: `Enjoy your stay in this cozy single room. Perfect for solo travelers with a comfortable bed and modern amenities.`,
          checkin: '',
          checkout: ''
        },
        {
          id: 'd09hne889430kd',
          title: "H201 - Spacious Double Room",
          price: 86,
          personCount: 2,
          bedCount: 1,
          images: ["https://html.merku.love/hosteller/img/rooms/01.webp"],
          description: `Indulge in the luxury of our spacious double room. Ideal for couples or those who prefer extra space. Modern design and stunning views.`,
          checkin: "2023-12-05",
          checkout: "2023-12-15",
        },
      ];
      

    let { id } = useParams();
    console.log(id)

    // Find the room with the matching id
    const room = initialRoomData.find((room) => room.id === id);
    console.log(room)
  
    // If no matching room is found, you can handle it accordingly (e.g., show an error message)
  
    // Destructure the room properties
    const { title, images, bedCount, personCount, description, price } = room || {};

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
    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.price}>
                    {price}$<span>/night</span>
                </div>
                <div className={Styles.frontImageBox}>
                {images && images.length >= 1 && (
                        <img src={images[0]} alt="front image" className={Styles.frontImage} />
                    )}
                </div>
                <div className={Styles.basicFacilities}>
                    <div className={Styles.iconBox}>
                        {personCount&&returnPeople(personCount)}
                    </div>
                    <div className={Styles.iconBox}>
                        {bedCount&&returnBeds(bedCount)}
                    </div>
                </div>
                <div className={Styles.detailedDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero tenetur perspiciatis vel atque excepturi? Doloremque soluta quas, fugiat, in repellendus voluptas eligendi consequuntur aut natus eius reiciendis velit eaque optio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus consectetur, voluptate libero minima repellendus, ducimus, unde quisquam eum accusamus harum. Officia veniam quam aperiam nulla quae repudiandae, placeat aut.

                </div>
                <div className={Styles.allFacilities}>
                    <h3>All facilities</h3>
                    <div>
                        <div className={Styles.iconBox}>
                            <LuBedDouble className={Styles.icon}/>
                            <span>Large comfortable beds</span>
                        </div>
                        <div className={Styles.iconBox}>
                            <IoWifiOutline className={Styles.icon}/>
                            <span>Free fast WiFi</span>
                        </div>
                        <div className={Styles.iconBox}>
                            <FaShower className={Styles.icon}/>
                            <span>Shower in rooms</span>
                        </div>
                        <div className={Styles.iconBox}>
                            <FaKitchenSet className={Styles.icon}/>
                            <span>Shared kitchen space</span>
                        </div>
                        <div className={Styles.iconBox}>
                            <FaPhoneAlt className={Styles.icon}/>
                            <span>4/7 support</span>
                        </div>
                        <div className={Styles.iconBox}>
                            <AiFillSafetyCertificate className={Styles.icon}/>
                            <span>Secure</span>
                        </div>
                    </div>
                </div>
                <div className={Styles.gallery}>
                {images &&
                        images.length >= 1 &&
                        images.map((image, index) => (
                            <img key={index} src={image} alt={`room-${index}`} />
                        ))}
                </div>
            </div>
        </>
    )
}