import Styles from './Dashboard.module.css';
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Rooms from './page/Rooms';
import { Routes, Route, Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import RoomDetails from './page/RoomDetails';
import RoomDetailsBooked from './page/RoomDetailsBooked';
import Welcome from './page/Welcome';
import { MdOutlineManageSearch } from "react-icons/md";

export default function Dashboard({ admin }) {
  const userData = [
    {
        id: '08y48yg9h98h',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        booked: 'd09hne889430kd',
        admin: false
    }
  ]
  const user = userData[0];
  /* Will display different icons for Admin */
  return (
    <>
      {
        !user.admin&&
          <>
            <div className={Styles.container}>
              <div className={Styles.navigation}>
                <Link style={{textDecoration:"none"}} to="rooms">
                  <div className={Styles.navIconContainer}>
                    <FiSearch className={Styles.navIcon} />
                    <div>Rooms</div>
                  </div>
                </Link>
                <Link style={{textDecoration:'none'}} to={`detailsBooked/${user.booked}`}>
                  <div className={Styles.navIconContainer}>
                      <GrHomeRounded className={Styles.navIcon} />
                      <div>Booked</div>
                  </div>
                </Link>
                <div className={Styles.navIconContainer}>
                  <FaRegUser className={Styles.navIcon} />
                  <div>Profile</div>
                </div>
                <div className={Styles.navIconContainer}>
                  <IoMdHelpCircleOutline className={Styles.navIcon} />
                  <div>Help</div>
                </div>
              </div>
              <div className={Styles.page}>
                <Routes>
                  <Route index element={<Welcome name={user.firstName}/>}/>
                  <Route path="/book" element={<Rooms />} />
                  <Route path="/details" element= {<RoomDetails />}/>
                  <Route path="detailsBooked/:id" element={<RoomDetailsBooked/>}/>
                </Routes>
              </div>
            </div>
          </>
      }
      {
        user.admin&&
        <>
          <div className={Styles.container}>
            <div className={Styles.navigation}>
              <Link style={{textDecoration:"none"}} to="rooms">
                <div className={Styles.navIconContainer}>
                  <MdOutlineManageSearch className={Styles.navIcon} />
                  <div>Manage</div>
                </div>
              </Link>
              <Link style={{textDecoration:'none'}} to={`detailsBooked/${user.booked}`}>
                <div className={Styles.navIconContainer}>
                    <GrHomeRounded className={Styles.navIcon} />
                    <div>Rooms</div>
                </div>
              </Link>
              <div className={Styles.navIconContainer}>
                <FaRegUser className={Styles.navIcon} />
                <div>Profile</div>
              </div>
              <div className={Styles.navIconContainer}>
                <IoMdHelpCircleOutline className={Styles.navIcon} />
                <div>Help</div>
              </div>
            </div>
            <div className={Styles.page}>
              <Routes>
                <Route index element={<Welcome name={user.firstName}/>}/>
                <Route path="/book" element={<Rooms />} />
                <Route path="/details" element= {<RoomDetails />}/>
                <Route path="detailsBooked/:id" element={<RoomDetailsBooked/>}/>
              </Routes>
            </div>
          </div>
        </>
      }
    </>
  );
}
