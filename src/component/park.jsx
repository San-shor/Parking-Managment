import React, { useState, useEffect} from "react";
import { db } from "../firbase.config";
import { addDoc, collection,getDocs } from "firebase/firestore";
import ParkList from "./parkList";

const initialState = {
  license_no: "",
  type: "",
  name: "",
  phone: "",
  status: "",
  address: "",
  entry_date: "",
  exit_date: "",
  parking_charge:"" 
};

const Park= () => {
  const [parkInfo, setParkInfo] = useState([]);
  const parkCollection = collection(db, "parkList");

  useEffect(()=>{
    const getParkinfo=async ()=>{
      const snapshot = await getDocs(parkCollection);
      const data = snapshot.docs.map((doc) => doc.data());
      setParkInfo(data);
    }
    getParkinfo()
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParkInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const doc = await addDoc(parkCollection, parkInfo);
      console.log(doc.id);
      setParkInfo(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">License No</span>
          </label>
          <input
            type="text"
            placeholder="License no"
            name="license_no"
            value={parkInfo.license_no}
            onChange={handleChange}
            className="input input-bordered w-full mx-w-xs"
          />
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <select
            className="select select-bordered"
            name="type"
            value={parkInfo.type}
            onChange={handleChange}
          >
            <option disabled selected>
              Pick One
            </option>
            <option>Bus</option>
            <option>Truck</option>
            <option>Car</option>
          </select>
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="your name"
            className="input input-bordered w-full mx-w-xs"
            name="name"
            value={parkInfo.name}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="phone no"
            className="input input-bordered w-full mx-w-xs"
            name="phone"
            value={parkInfo.phone}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text">Your Address</span>
          </label>
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full mx-w-xs"
            name="address"
            value={parkInfo.address}
            onChange={handleChange}
          />
          <label className="cursor-pointer label">
            <span className="label-text">In</span>
            <input type="checkbox" className="checkbox checkbox-success" value="in"
                name="status"
                // checked={formInfo.status === "in"}
                onChange={handleChange}/>
            <span className="label-text">Out</span>
            <input type="checkbox" className="checkbox checkbox-success"  value="out"
                name="status"
                // checked={formInfo.status === "out"}
                onChange={handleChange}/>
          </label>
          <label className="label">
            <span className="label-text">Entry Date</span>
          </label>
          <input
            type="datetime-local"
            className="input input-bordered w-full mx-w-xs"
            name="entry_date"
            value={parkInfo.entry_date}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text">Exit Date</span>
          </label>
          <input
            type="datetime-local"
            className="input input-bordered w-full mx-w-xs"
            name="exit_date"
            value={parkInfo.exit_date}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text">Parking Charge</span>
          </label>
          <input
            type="number"
            placeholder="charge fees"
            className="input input-bordered w-full mx-w-xs"
            name="parking_charge"
            value={parkInfo.parking_charge}
            onChange={handleChange}
          />
          <button className="btn btn-success btn-sm">Add Park</button>
        </div>
      </form>
      <ParkList parkInfo={parkInfo}/>
    </div>
  );
};

export default Park;
