import React, { useReducer, useState, useEffect, Component } from "react";
import { Button } from "react-bootstrap";
import ReactQuill , {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useParams} from "react-router-dom";
import { io, Socket } from "socket.io-client";
import axios from 'axios'
import logo from './file.png';
import save from './FrontEnd/floppy-disk.png';
import down from './FrontEnd/save.png';
import "./FrontEnd/text.css"
import draftToHtml from 'draftjs-to-html';
import {convertFromHTML} from 'html-to-draftjs';
import { EditorState,ContentState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
const PORT = process.env.PORT || 5000;
// cennection to socket
const socket = io.connect("http://localhost:"+PORT)


var id=""
var userstate = false
// getting and sending doc id from react router
function Senddocid(){
  id  = useParams().id;

}

var viewpasss = ""
var currContent = '<p><br></p>'
function copy() {

  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value=id;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

}

function viewcopy(){

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value="Hey! You can view my document by going to *www.filesop.com/opendocument* \nAnd entering the following credentials : \nDocument ID: " + id + "\n" + "Password: " + viewpasss;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}


setInterval(async ()=>{ 
  if(userstate===true){
  await axios.post("http://localhost:"+PORT+"/update",{"DocID":id, "content":currContent })}
}, 60000);





// Main component
function App() {
  if(id===""){
    Senddocid();
  }
  
  const [content, updateContent] = useState('<p><br></p>');
  const [access,updateaccess] = useState(false);
  const [user,userUpdate]= useState("Viewer");
  const [useronline,updateuseronline]=useState(0)

  const contentBlock = htmlToDraft(content);
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  const editorState = EditorState.createWithContent(contentState);

  class ControlledEditor extends Component {
    constructor(props) {
      super(props);
  
        this.state = {
          editorState,
        };
      }
    
  
    onEditorStateChange: Function = (editorState) => {
      this.setState({
        editorState,
      });
      if(access===true && user==="Admin"){
      currContent = draftToHtml(convertToRaw(editorState.getCurrentContent()))
      socket.emit("message",[currContent,id])}
    };
  
    render() {
      const { editorState } = this.state;
      if(access === true && user==="Admin"){
      return (
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      )}
      else if(access === true && user==="Viewer"){
        return (
          <Editor
            toolbarHidden
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            readOnly = "true"
          />
        )}
    }
  }



  /*----------------------------------*/
  function exportHTML(){
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
         "xmlns:w='urn:schemas-microsoft-com:office:word' "+
         "xmlns='https://www.w3.org/TR/html40'>"+
         "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header+currContent+footer;
    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  }

  /*--------------------------------------------*/


  socket.on("updateonline",(data)=>{

    updateuseronline(data);
    
})
  useEffect(()=>{

  },[useronline])

  useEffect(()=>{
    const getData = async () => {
      const resp = await axios.post('http://localhost:'+ PORT+ '/passcheck',{ID: id});
      viewpasss = await resp.data.V_P
      try{
        var xx = sessionStorage.ID.split(";")

      if(xx[2]==="Admin"){
      if(resp.data.Password === xx[1] && id=== xx[0]){
        userstate = true
        updateaccess(true)
        userUpdate("Admin")
        var bic = await axios.post('http://localhost:' + PORT+ '/newfile',{id: id});
        var basic=bic.data
        updateuseronline(basic.others)

        if (basic.others===1)
        {
          updateContent(basic.daa)
          currContent = basic.daa
          socket.emit("dont-need-content",id)
        }
        else
        {
          socket.emit("need-content",id)
        }
      }}
      else if(xx[2]==="Viewer"){
        if(resp.data.Viewer_Password === xx[1] && id=== xx[0]){
          userstate = false
          updateaccess(true)
          userUpdate("Viewer")
          var bic = await axios.post('http://localhost:' + PORT + '/newfile',{id: id});
          var basic=bic.data
          updateuseronline(basic.others)
        if (basic.others===1)
        {
          updateContent(basic.daa)
          currContent = basic.daa
          socket.emit("dont-need-content",id)
        }
        else
        {
          socket.emit("need-content",id)
        }
        }
      }

    }
    catch(err){
      userstate = false
      updateaccess(false)
      
    }
    }
    getData();
  },[])





//someone else joins the room


socket.on("want-content", () =>{
  
  if(currContent!== '<p><br></p>' && access===true && user==="Admin"){
  socket.emit("recieve-content",[id,currContent])}
  
})

  

// someone else in room edits content
  socket.on("signal", (data)=>{
    if(access === true){
    currContent = data
    updateContent(data)
    }
  })



// what happens when content changes

  async function update() {
     await axios.post("http://localhost:" + PORT +"/update",{"DocID":id, "content":currContent})
  }

  useEffect(() => {
    const handleTabClosing = () => {
      if(access==true) {

        axios.post('http://localhost:' + PORT + '/exitfile',{"id" : id})
        }
    }
    

    window.addEventListener('beforeunload', handleTabClosing)
    return () => {

        window.removeEventListener('beforeunload', handleTabClosing)
    }
  },[access])



  // main return
  if(access === true){
    if(user==="Admin"){
      socket.emit("docId",id)

  return (
    <div id="app-bg" >
    <img id="savebtn" src={save} alt="Logo" onClick={update} height="24px" width="24px" />
    <img id="downbtn" src={down} alt="Logo" onClick={exportHTML} height="24px" width="24px" />
    <ControlledEditor />
    <span id="docid" >Document ID : <span id="docidbg">{id}</span> </span> <img src={logo} alt="Logo" onClick={copy} />

    <div id="viewid"><span >Copy View Only Credentials : <img src={logo} alt="Logo" onClick={viewcopy} /></span></div>

    <div id="online"><div>Users Online: {useronline} <div class="dot"></div></div></div>    
    
    </div>
  )

}
    else if(user==="Viewer"){
      socket.emit("docId",id)
      return(
        <div>
        <div id="viewonly">View Only Mode</div>
        <ControlledEditor />
        <span id="docid" >Document ID : <span id="docidbg">{id}</span> </span>
        </div>
      )}
}
  else{
    return (

      <> <div class="stars"> <h1 id="notfh1">403</h1>
      <p id="notfp">ACCESS DENIED.</p>
      <a id="notfbtn" href="/opendocument"> Click Here to Open Existing Files.</a> </div>
      <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"></img>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"></img>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"></img>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"></img>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

            </div>
      </>
    )
  };

  
}


export default App;