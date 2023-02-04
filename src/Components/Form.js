import React, {useState}from 'react'

export default function Form(props) {
    
    const handOnclickUpp=()=>{
        setText(text.toUpperCase());
    }
    const handOnclickLow=()=>{
        setText(text.toLowerCase());
    }
    const clean=()=>{
        setText('');
    }
    const CopyText=()=>{
      var textCpy=document.getElementById('text');
      textCpy.select();
      navigator.clipboard.writeText(textCpy.value);
    }
    const removeExspace=()=>{
      var Remove =text.split(/[ ]+/)
      setText(Remove.join(" "));
    }
    const handOnChange=(events)=>{
        setText(events.target.value);
    }

    const [text, setText] = useState('');
    // text='new text' --->Wrong way to change the state
    // setText='new text' --->correct way to change the state
    return (
      <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handOnChange}
            id="text"
            rows="8"
            placeholder="Enter text here...."
          style={{background: props.mode==='dark'?'white':'#dbdee0', color:props.mode==='dark'?'black':'#495057'}}
          ></textarea>
        </div>
        <div className="btn btn-primary me-5" onClick={handOnclickUpp}>
          TextToUppercase
        </div>
        <div className="btn btn-secondary me-5" onClick={handOnclickLow}>
          TextToLowercase
        </div>
        <div className="btn btn-info me-5" onClick={CopyText}>
        Copy Text
        </div>
        <div className="btn btn-success me-5" onClick={removeExspace}>
        Remove Extra Space
        </div>
        <div className="btn btn-danger me-5" onClick={clean}>
          Clear Text
        </div>
        {/* <div className="btn btn-success my-3 float-sm-end">submit</div> */}
        <div className='container my-3'>
          <h2>Your Text Summary</h2>
          <h6>{(text.split(" ")).length} Words and {text.length} Characters</h6>
          <h6>{0.008*(text.split(" ")).length} Minutes to read</h6>
        </div>
        <div className='container my-3'>
          <h2>Preview</h2>
          {text.length>0?text:'Write something to preview'}
        </div>
      </div>
    );
}
