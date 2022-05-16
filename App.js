/* eslint-disable */
import React, {useState} from 'react';
import logo1 from './GitHub_Logo.png';
import logo2 from './LI-Logo.png';
import './App.css';

function App() {

  let [info, info_change] = useState(['School', 'Major', 'Threads', 'e-mail', 'Name']); //state
  let [like, like_change] = useState(0);
  let [work, work_change] = useState(['Making Blog', 'Study Algorithm', 'School Stuff'])

  function name_change() { //state change function
    var newArray = [...todo1]; //deep copy 
    newArray[1] = 'React';
    todo1_change(newArray);
  }
  function open_github() {
    window.open(url, "https://github.com/eliotte0106", 'noopner,noreferrer');
  }
  function open_linkedin() {
    window.open(url,"https://www.linkedin.com/in/eliotte-park-102673224/", "noopener,noreferrer");
  }
  return (
    <div className="App">
      <div className = "black-nav">
        <div style = {{color : 'white', fontSize : '50px'}}> PERSONAL BLOG </div>
      </div>
      <div className = "list">
        <h2 style = {{fontWeight: 'bold', fontSize: '40px'}}> About me 🤔</h2>
        <hr/>
        <h3>{info[4] + ": Jihong Park"}</h3>
        <h3>{info[0] + ": Georgia Institute of Technology"}</h3>
        <h3>{info[1] + ": Computer Science"}</h3>
        <h3>{info[2] + ": Info/Internetwork-Intelligence"}</h3>
        <h3>{info[3] + ": jihong2253@gmail.com"}</h3>
      </div>
      <div className = "list2">
        <div className='button1'>
          <button onClick = {open_github}><img className="github_img" src = {logo1}/></button>
        </div>
        <div className='button2'>
          <button onClick = {open_linkedin}><img className="linkedin_img" src= {logo2}/></button>
        </div>
        <hr/>
      </div>
      <div className = "list">
        <h2 style = {{fontWeight: 'bold', fontSize: '40px'}}> Daily Work 💻 </h2>
        <hr/>
      </div>
      <div className = "list">
        <h3> { work[0]} </h3>
        <p>Date: 05/16</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { work[1]} </h3>
        <p>Date: 05/15</p>
        <hr/>
      </div><div className = "list">
        <h3> { work[2]} </h3>
        <p>Date: 05/14</p>
        <hr/>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <>
    <div className = "modal">
        <h2> Title</h2>
        <p> date </p>
        <p> de </p>
    </div>
    </>
  )
}

export default App;
