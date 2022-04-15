import { useState } from "react";

const Create = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('gender');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const resultContainer = document.querySelector(".form-result")
    const results = { first, last, email, gender,  address, bio };

    resultContainer.innerHTML = `
    <p class="form-result-title">form results</p>
    <p><b>First Name:</b> ${first}</p>
    <p><b>Last Name:</b> ${last}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Address:</b> ${address}</p>
    <p class="bio"><b>Bio:</b> ${bio}</p>`
    console.log(results);
    setFirst("")
setLast("")
setEmail("")
setGender("")
setAddress("")
    setBio("")

    // scroll to the results
    window.scrollTo({
      top: resultContainer.offsetTop -15,
      left: 0,
    });
  }

  return (
    <div className="create">
      <h2 className="create-title">Edit You Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>First Name:</label>
        <input 
          type="text" 
          name="name"
          required 
          placeholder="John"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <label>Last Name:</label>
        <input 
          type="text" 
          name="name"
          required 
          placeholder="Doe"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
       
        <label>Email Address:</label>
        <input 
          type="email" 
          name="email"
          required 
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <label>Gender:===o0pp0p
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="gender">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="prefer not to say">Prefer not to say</option>
        </select>
        <label>Residential Address:</label>
        <input 
          type="text" 
          name="address"
          required 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Bio:</label>
        <textarea
          name="bio"         
          required
         
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      
        <button >Submit</button>
      </form>
          <div className="form-result">
          
            
          </div>




      
      
    </div>
  );
}
 
export default Create;