import React, { useRef } from "react";

import { createLocation  } from "../../api";

function CreateForm() {
  const name = useRef('')
  const price = useRef('')
  const address = useRef('')
  const googleMap = useRef('')
  const website = useRef('')
  const untappd = useRef('')
  const lon = useRef('')
  const lat = useRef('')

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!name.current.value || !price.current.value || !address.current.value || !googleMap.current.value || !website.current.value || !untappd.current.value || !lon.current.value || !lat.current.value) {
      alert('You need fill up all the fields')
    } else {
      await createLocation(name.current.value,price.current.value,address.current.value,googleMap.current.value,website.current.value,untappd.current.value,lon.current.value,lat.current.value)
      alert('Created location')
    }
  }

  return (
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" ref={name} type="text" name="name" placeholder="Name" required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input className="input" ref={price} type="text" name="price" placeholder="Price"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Address</label>
        <div className="control">
          <input className="input" ref={address} type="text" name="address" placeholder="Address"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Google Maps URL</label>
        <div className="control">
          <input className="input" ref={googleMap} type="text" name="googleMap" placeholder="Google Maps URL"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Website URL</label>
        <div className="control">
          <input className="input" ref={website} type="text" name="website" placeholder="Website URL"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Untappd URL</label>
        <div className="control">
          <input className="input" ref={untappd} type="text" name="untappd" placeholder="Untappd URL"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Longitude</label>
        <div className="control">
          <input className="input" ref={lon} type="text" name="lon" placeholder="Longitude"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Latitude</label>
        <div className="control">
          <input className="input" ref={lat} type="text" name="lat" placeholder="Latitude"  required/>
        </div>
      </div>
      <div className="field">
        <button className="button is-primary" onClick={handleCreate}  type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreateForm;