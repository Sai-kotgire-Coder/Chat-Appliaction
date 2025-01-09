import React, { useState } from 'react';

const PersonForm = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    email: ''
  });

  // useEffect(() => {
  //   // Load data from local storage on component mount
  //   const storedPerson = localStorage.getItem('person');
  //   if (storedPerson) {
  //     setPerson(JSON.parse(storedPerson));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save data to local storage whenever person state changes
  //   localStorage.setItem('person', JSON.stringify(person));
  // }, [person]);

  const handleChange = (e) => {
    console.log(e.target.value,e.target.name,"ee")
    let personData=person;
    personData={...personData,[e.target.name]:e.target.value};
    setPerson(personData)
    // setPerson({
    //   ...person,
    //   [e.target.name]: e.target.value
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform operations on the person object here
    console.log(person,"person :", JSON.stringify(person));
    localStorage.setItem('person', JSON.stringify(person));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={person.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={handleChange}/>
        <h4 style={{padding:"3px"}}>{person.age}</h4>
        <h4 style={{padding:"3px"}}>{person.name}</h4>
        <h4 style={{padding:"3px"}}>{person.email}</h4>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonForm;
