import React, { useState ,useEffect} from "react";
import "./addpark.css";

const initialState = {
  license_no: "",
  type: "",
  name: "",
  phone: "",
  status: "",
  address: "",
  entry_date: "",
  exit_date: "",
  parking_charge: "",
};

const AddPark = () => {
  const [formInfo, setForm] = useState(initialState);
  const [parkData, setParkData] = useState([]);

 
  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("parkData");
    if (storedData) {
      setParkData(JSON.parse(storedData));
    }
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedParkData = [...parkData, formInfo];
    
    setParkData(updatedParkData);
    localStorage.setItem("parkData", JSON.stringify(updatedParkData));
    setForm(initialState);
  };
  return (
    <div>
      <form className="add-park-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="licenseNo" className="label">
            License No:
          </label>
          <input
            type="number"
            id="licenseNo"
            np
            placeholder="License no"
            className="form-input"
            value={formInfo.license_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type" className="label">
            Type:
          </label>
          <select
            id="type"
            name="type"
            className="form-input"
            value={formInfo.type}
            onChange={handleChange}
          >
            <option>Microbus</option>
            <option>Car</option>
            <option>Truck</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ownerName" className="label">
            Owner name:
          </label>
          <input
            type="text"
            id="ownerName"
            name="name"
            placeholder="Your name"
            className="form-input"
            value={formInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerPhone" className="label">
            Owner Phone
          </label>
          <input
            type="number"
            id="ownerPhone"
            name="phone"
            placeholder="Your phone number"
            className="form-input"
            value={formInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="label">
            Status:
          </label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="in"
                name="status"
                checked={formInfo.status === "in"}
                onChange={handleChange}
              />
              In
            </label>
            <label>
              <input
                type="checkbox"
                value="out"
                name="status"
                checked={formInfo.status === "out"}
                onChange={handleChange}
              />
              Out
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address" className="label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            className="form-input"
            value={formInfo.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="entryDate" className="label">
            Entry date:
          </label>
          <input
            type="datetime-local"
            id="entryDate"
            className="form-input"
            name="entry_date"
            value={formInfo.entry_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exitDate" className="label">
            Exit date:
          </label>
          <input
            type="datetime-local"
            id="exitDate"
            name="exit_date"
            className="form-input"
            value={formInfo.exit_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parkingCharge" className="label">
            Parking Charge:
          </label>
          <input
            type="number"
            id="parkingCharge"
            className="form-input"
            name="parking_charge"
            value={formInfo.parking_charge}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-submit-btn">
          Add
        </button>
      </form>
      
    </div>
  );
};

export default AddPark;
