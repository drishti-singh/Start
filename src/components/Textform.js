import React, {useState} from "react";

export default function Textform(props) {
    const [text, setText] = useState("");
    //To update the value of text we can't do it directly instead we need to use function

    //We can overwrite the value of textarea by creating a function at the time of event onChange and we can set the value e.target.value which the user will enter
    function changeText(e){
        setText(e.target.value);
        //setText value will get updated to the value of text
    }
    function upperCase(){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Success !! " , "Converted to UpperCase");
    }
    function lowerCase(){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Success !! " , "Converted to LowerCase");
    }
    function copyText(){
        let newText = document.getElementById("textBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Success !! " , "Text Copied");
    }
    function extraSpace(){
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Success !! " , "Removed Extra Spaces");

    }
    function firstCapital(){
        let newText = text.charAt(0).toUpperCase();
        setText(newText + text.slice(1).toLowerCase());
        props.showAlert("Success !! " , "First Letter transformed to capital");
    }
    return (
    <>
    <div style={{paddingBottom: "2rem"}} className={`container text-${props.mode==="light" ? "dark" : "light"}`} >
        <h2 className="my-3">{props.heading}</h2>
        <textarea
        style={{backgroundColor : `${props.mode==="light" ? "white" : "#00000091"}`}}
            onChange={changeText}
            className={`form-control container text-${props.mode==="light" ? "dark" : "light"}`}
          id="textBox" rows="8"
          value={text}
        ></textarea>
        <button  onClick={upperCase} className={`${text.length===0 ? "disabled" : "enabled"}  btn btn-outline-${props.mode==="light" ? "dark" : "light"} my-3 mx-2`}>Convert to UpperCase</button>
        <button onClick={lowerCase} className={`${text.length===0 ? "disabled" : "enabled"} btn btn-outline-${props.mode==="light" ? "dark" : "light"} my-3 mx-2`}>Convert to LowerCase</button>
        <button onClick={copyText} className={`${text.length===0 ? "disabled" : "enabled"} btn btn-outline-${props.mode==="light" ? "dark" : "light"} my-3 mx-2`}>Copy Text</button>
        <button onClick={extraSpace} className={`${text.length===0 ? "disabled" : "enabled"} btn btn-outline-${props.mode==="light" ? "dark" : "light"} my-3 mx-2`}>Remove Extra Space</button>
        <button onClick={firstCapital} className={`${text.length===0 ? "disabled" : "enabled"} btn btn-outline-${props.mode==="light" ? "dark" : "light"} my-3 mx-2`}>First Letter Capital</button>

        <p style={{textDecoration : "underline"}}><strong>Your text summary : </strong></p>
        <p>{text.split(/[^\s]+/).length -1} - Words & {text.length} - Characters</p>
        <p>{(text.split(/[^\s]+/).length -1)*0.008} minutes</p>
        <h4>Preview</h4>
        <p>{text.length !==0 ? text : "Nothing To Show"}</p>
    </div>
    </>
  );
}
