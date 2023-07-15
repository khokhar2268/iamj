import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    };
    const handleClearClick = () => {
        let newText = ''
        setText(newText);
        props.showAlert("text cleared", "success")

    };
    const handleOnChange = (event) => {
        setText(event.target.value);

    };
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied", "success")

    };


    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(' '));
        props.showAlert("remove extra spaces", "success")

    };

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>removeExtraSpaces</button>
            </div >
            <div className="container my-3" style={{
                color: props.mode === 'dark' ? 'white' : '#042743'
            }}>
                <h1>your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
            </div>
        </>
    );
}