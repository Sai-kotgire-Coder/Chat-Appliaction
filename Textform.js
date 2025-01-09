import React, {useState,useEffect} from 'react'
  
export const Textform =(props)=> {
  const [storedPerson,setStoredPerson] = useState(null)
  useEffect(()=>{
    const storedPerson = localStorage.getItem('person');
    if(storedPerson){
      setStoredPerson(JSON.parse(storedPerson));
    }
  },[])
  const onUpper =(event) =>{
    // console.log("textarea");
    setText(event.target.value)
  }

  const handleUpclick =() =>{
    // console.log("up" + text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  
  const handlelowclick =()=>{
    // console.log('down'+text );
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  
  const handleclear =()=>{
    // console.log('down'+text );
    let newtext= "";
    setText(newtext);
  }
  
  
  const [text, setText] = useState('enter  your text here');
  return (
    <>
        <div className="conatiner">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <h1>{storedPerson?storedPerson.name:""}</h1>
            <h1>{storedPerson?storedPerson.age:""}</h1>
            <h1>{storedPerson?storedPerson.email:""}</h1>
            <textarea className="form-control" value={text} onChange={onUpper} id="exampleFormControlTextarea1" rows="3"></textarea>
            <div>
              <button className='btn btn-primary my-3 mx-2'onClick={handleUpclick}>CONVERT TO UPPERCASE</button>
              <button className='btn btn-primary my-3 mx-2' onClick={handlelowclick}>CONVERT TO lowercase</button>
              <button className='btn btn-primary my-3 mx-2' onClick={handleclear}>clear the box</button>
              {/* <button className='btn btn-primary my-3'onClick={}>CONVERT TO UPPERCASE</button> */}
            </div>
            </div>
        </div>
        <div className="conatiner">
            <h2>it wil count your words and char</h2>
            <p>{text.split(" ").length} words , {text.length} charecters</p>
            <p>{0.08*text.split(" ").length} minutes to read</p>
            <h2>your text privew</h2>
            <p>{text}</p>
        </div>
    </>
  )
}