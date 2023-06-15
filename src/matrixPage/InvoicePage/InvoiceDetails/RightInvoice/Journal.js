import React from 'react';

const Journal = () => {
  return (
    <div className="journal-container">
      <div className="user-list">
        {userData.map((user) => (
          <>
            <div className="user-container">
              <div className="user-card" key={user.id}>
                <img src={user.image} alt={user.name} className="user-image" />
                <div className="user-details">
                  <h6>{user.name}</h6>
                  <p>{user.activity}</p>
                  <p className="date">{user.date}</p>
                </div>
              </div>
              <label className="user-status">{user.status}</label>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

// user Data
const userData = [
  {
    id: 1,
    name: 'John Smith',
    activity: 'Invoice Saved',
    date: '2023-04-21',
    image:
      'https://portal.netgate.io-procurement.com/ngtFiles/netgate05/ngtSysImages/profileImage/4B63E955-B111-AB64-55D9AB20A78299E1_9243.png',
    status: 'Saved'
  },
  {
    id: 2,
    name: 'Jane Doe',
    activity: 'Invoice not Saved',
    date: '2023-04-20',
    image:
      'https://portal.netgate.io-procurement.com/ngtFiles/netgate05/ngtSysImages/profileImage/4B63E955-B111-AB64-55D9AB20A78299E1_9243.png',
    status: ' Not Saved'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    activity: 'Invoice Saved',
    date: '2023-04-19',
    image:
      'https://portal.netgate.io-procurement.com/ngtFiles/netgate05/ngtSysImages/profileImage/4B63E955-B111-AB64-55D9AB20A78299E1_9243.png',
    status: 'Saved'
  }
];

export default Journal;
