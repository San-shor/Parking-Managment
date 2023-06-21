import React from "react";


const ParkList = ({parkInfo}) => {
  const formatDate = (date) => {
    return new Date(date.seconds * 1000).toLocaleString();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Vehicle Type</th>
            <th>License No</th>
            <th>Entry Time</th>
            <th>Exit Time</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {parkInfo.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.license_no}</td>
              <td>{formatDate(data.entry_date)}</td>
              <td>{formatDate(data.exit_date)}</td>
              <td>{data.status}</td>
              <td>
                <button className="btn btn-outline btn-info btn-sm">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParkList;
