import React from 'react';

const Rooms = ({ or }) => {
  return (
    <div>
      <h3>Open Rooms</h3>
      <table id="openRooms">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>
          </tr>
        </thead>
        <tbody>
          {or.map(room =>
            <tr key={room.room_ID}>
              <td>{room.room_ID}</td>
              <td>{room.room_Type}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
