import React, {useState} from 'react';


const TextForm = (props) => {

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    
    const handleLoClick = ()=> {
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
        navigator.clipboard.writeText(text);
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
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container mt-2" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h4>Your text summary.</h4>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}min Average time to read it.</p>
                <h5 className="my-2">Preview</h5>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
            </div>
        </>
    )
}

export default TextForm;
