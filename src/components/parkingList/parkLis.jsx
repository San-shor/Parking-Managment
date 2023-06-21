import React, { useEffect, useState } from "react";

const ParkList = () => {
  const [parkData, setParkData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("parkData");
    if (storedData) {
      setParkData(JSON.parse(storedData));
    }
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(parkData[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      status:"out"
    }));
  };

  const handleUpdate = () => { 
      const updatedData = [...parkData];
      updatedData[editIndex] = formData;
      setParkData(updatedData);
      localStorage.setItem("parkData", JSON.stringify(updatedData));
      setFormData({});
      setEditIndex(null);
    
  };

  return (
    
    <div className="overflow-x-auto">
      <h2>Vehicles List:</h2>
      {Array.isArray(parkData) && parkData.length > 0 ? (
        <table className="table table-zebra">
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
            {parkData.map((data, index) => (
              <tr key={index}>
                <td>
                    {data.name}
                </td>
                <td>
                  {data.type}
                </td>
                <td>{data.license_no}</td>
                <td>{data.entry_date}</td>
                <td>{editIndex === index ? (
                    <input
                      type="datetime-local"
                      name="exit_date"
                      value={formData.exit_date}
                      onChange={handleChange}
                    />
                  ) : (
                    data.exit_date
                  )}</td>
                <td>{data.status}</td>
                <td>
                  {editIndex === index ? (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={handleUpdate}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline btn-info btn-sm"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default ParkList;
