import React, { useState } from "react";
import Room from "../components/Room";
import Styles from "./Rooms.module.css";
import { Link } from "react-router-dom";

const Rooms = () => {
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
  

  const [searchCriteria, setSearchCriteria] = useState({
    title: "",
    checkin: "",
    checkout: "",
    capacity: "", // New capacity property
  });

  // Filter rooms based on search criteria
  const filteredRooms = initialRoomData.filter((room) => {
    const titleMatch = room.title.toLowerCase().includes(searchCriteria.title.toLowerCase());
    const capacityMatch = searchCriteria.capacity
      ? room.personCount === parseInt(searchCriteria.capacity, 10)
      : true;

    return titleMatch && capacityMatch;
  });

  const handleSearchChange = (e) => {
    setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={Styles.container}>
        {/* Search form */}
        <div className={Styles.searchContainer}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={searchCriteria.title}
            onChange={handleSearchChange}
          />
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={searchCriteria.capacity}
            onChange={handleSearchChange}
          />
        </div>

        {/* Display filtered results */}
        <div className={Styles.results}>
          <p>Number of results: {filteredRooms.length}</p>
          {filteredRooms.map((room, index) => (
            <Link to={`details/${room.id}`} style={{ textDecoration: 'none' }}>
              <Room key={index} {...room} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
