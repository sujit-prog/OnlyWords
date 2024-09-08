import React , {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
   // console.log("uppercase was clicked + text");
    let newText = text.toUpperCase();
    setText(newText);
  }
  //const handleSearch = () => {
    // console.log("uppercase was clicked + text");
    // let newText = text.concat;
    // setText(newText);
 // }
  const handleLoClick = () => {
    let newText = text.toLowerCase();    
    setText(newText);
  }
  const handleClick = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
  }
  const handleClear = () => {
    let newText = " ";
    setText(newText);
  }
  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);  // convert text to uppercase on change  // event.target.value is the current text in the textarea
  }
  const [text, setText] = useState('');   
  
  return (
    <>
    <div className="container"style={{color:props.mode ==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10" ></textarea>
</div>
<button className="btn btn-info mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-info mx-2" onClick={handleLoClick}>convert to lowercase</button>
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-warning" type="submit">Search</button>
<button className="btn btn-info mx-2 my-2" onClick={handleClick}>Reverse</button>
<button className="btn btn-info mx-2" onClick={handleClear}>Clear All</button>
    </div>
    <div className="container"style={{color:props.mode ==='dark'?'white':'black'}}>
      <h2>text summary</h2>
      <p>Word count: {text.split(" ").length}</p>
       <p>Character Count: {text.length}</p>
       <p>Minutes to read:{0.008 * text.split(" ").length}</p>
       <h2>Preview</h2>
       <p>{text}</p>

    </div>
    </>
  )
}
