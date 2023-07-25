import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications:""
  })



  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the form data");
    console.log(formData);
  }

  return (
    // <div className="flex flex-col items-center mt-2">
    <div className="w-full md:max-w-[50%] mx-auto p-8 shadow">

      <form onSubmit={submitHandler} className="space-y-2">

        <label
          htmlFor="firstName"
          className="text-sm text-gray-900 font-medium leading-6"
        >First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="Lakshyadeep"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 rounded-md"
          
        />
        <br />

        <label
          htmlFor="lastName"
          className="text-sm text-gray-900 font-medium leading-6"
        >Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Gogoi"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 rounded-md"
        />

        <br />

        <label
          htmlFor="email"
          className="text-sm text-gray-900 font-medium leading-6"
        >Email Address</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Lakshyadeep@abc.com"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 rounded-md"
        />
        <br />

        <label
          htmlFor="country"
          className="text-sm text-gray-900 font-medium leading-6"
        >Country</label>

        <br />

        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 bg-white rounded-md"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Russia"> Russia</option>

        </select>

        <br />

        <label
          htmlFor="streetAddress"
          className="text-sm text-gray-900 font-medium leading-6"
        >Street Address</label>
        <br />
        <input
          type="streetAddress"
          name="streetAddress"
          placeholder="CH-21"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 rounded-md"
        />

        <br />


        <label
          htmlFor="city"
          className="text-sm text-gray-900 font-medium leading-6"
        >city</label>
        <br />
        <input
          type="city"
          name="city"
          placeholder="Chandigarh"
          id="city"
          value={formData.city}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 rounded-md"
        />

        <br />


        <label
          htmlFor="state"
          className="text-sm text-gray-900 font-medium leading-6"
        >State / Province</label>
        <br />
        <input
          type="state"
          name="state"
          placeholder="Chandigarh"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 rounded-md"
        />

        <br />
        <label
          htmlFor="postalCode"
          className="text-sm text-gray-900 font-medium leading-6"
        >Postal Code</label>
        <br />
        <input
          type="postalCode"
          name="postalCode"
          placeholder="140307"
          id="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className="mt-2 shadow-sm text-gray-900 w-full ring-1 p-2 placeholder:text-gray-400 rounded-md"
        />
        <br />
        <br/>


        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>



          <div className="mt-4 space-y-2 flex ">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="items-center"
              
            />
            <div>
              <label
                htmlFor="comments"
                className="text-sm text-gray-900 font-medium leading-6 ml-3 "
              >Comments</label>
              <p>Get notified when someone post comment on a positipn</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label
                htmlFor="candidates"
                className="text-sm text-gray-900 font-medium leading-6"
              >Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label
                htmlFor="offers"
                className="text-sm text-gray-900 font-medium leading-6"
              >Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        <br/>
        <br/>
        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          

          <input
          type="radio"
          value="Everything"
          id="pushEverything"
          name="pushNotifications"
          onChange={changeHandler}
                   
          />
          <label htmlFor="pushNotification" className="text-sm text-gray-900 font-medium leading-6">Everything</label>
          <br/>
          <input
          type="radio"
          value="Same as email"
          id="pushEmail"
          name="pushNotifications"
          onChange={changeHandler}
                   
          />
          <label htmlFor="pushEmail"
          className="text-sm text-gray-900 font-medium leading-6"
          >Same as email </label>
          <br/>

          <input
          type="radio"
          value="No Push Notification"
          id="pushNothing"
          name="pushNotifications"
          onChange={changeHandler}
                   
          />
          <label htmlFor="pushNothing"
          className="text-sm text-gray-900 font-medium leading-6"
          >No Push Notification</label>

        </fieldset>


        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>





      </form>


    </div>

  );
}

export default App;
