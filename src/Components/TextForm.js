import React, {useState} from 'react';


const TextForm = (props) => {

    const handleOnChange = (event)=> {
        console.log("On Change");
        setText(event.target.value);
    }
    
    const handleUpClick = ()=> {
        console.log("Uppercase Transformed" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    
    const handleLoClick = ()=> {
        console.log("Lowercase Transformed" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    
    const handleClearText= ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("All texts are Cleared!", "success");
    }

    const handleCopy = ()=> {
        let text = document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are Removed!", "success");
    }
    
    
    const  [text,setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#191919':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary btn-sm mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary btn-sm mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary btn-sm mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary btn-sm mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary btn-sm mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container mt-2" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h4>Your text summary.</h4>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}min Average time to read it.</p>
                <h5 className="my-2">Preview</h5>
                <p>{text.length>0?text:"Enter Something to Preview it here!"}</p>
            </div>
        </>
    )
}

export default TextForm;
