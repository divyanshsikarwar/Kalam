import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header"
import "./home.css"
import "./404.css"


function Home() {
    return(<>

        <div id="asddsfasdgsd">

        <div id="particles-js"></div>


        <section className="section header" id="header">
        <Header />

          <h1 className="title">Kalam</h1>
          <h2 className="sub-title">Real-time multi-user text editor for your team projects and presentations</h2>
          <a className="get-started-button js-scroll-item" href="#get-started"><span className="out">Get started</span> <span className="hover"><span className="inner">Get started</span> </span></a><a className="scroll-button js-scroll-item" href="#features"><span className="mouse"><span className="wheel" /></span></a>
        </section>

        <section className="section features" id="features">
          <h3 className="main-title">Features</h3>
          <div className="intro">
            <h4 className="title">Working as a team, doesn’t need sacrifices</h4>
            <p className="paragraph">
Why sacrifice privacy to work along with a team. With Kalam, you can work all together at the same time, without having to share the same account. You can work on different projects, with different teams, all at the same time!</p>
          </div>
          <div className="info">
            <div className="text">
              <h4 className="title">No setup for your audience</h4>
              <p className="paragraph">Why go through any hassle if all you want is to view for once?
It all happens on their web browser! All they have to do is visit a URL.</p>
            </div>
            <div className="illustration aliens">
              <div className="element background" />
              <div className="element guy-2 levitation-2" />
              <div className="element guy-1 levitation-1" />
              <div className="element ship" />
              <div className="system">
                <div className="circle index-1" />
                <div className="circle index-2" />
                <div className="circle index-3" />
                <div className="disc index-1">
                  <div className="inner" />
                </div>
                <div className="disc index-2">
                  <div className="inner" />
                </div>
                <div className="disc index-3">
                  <div className="inner" />
                </div>
              </div>
            </div>
          </div>
          <div className="info right">
            <div className="text">
              <h4 className="title">Transparent for you</h4>
              <p className="paragraph">Once you’re on Kalam editor, you can forget about every hassle. Just type as you normally do, and your changes will automatically be visible to your audience, on their editors.</p>
            </div>
            <div className="illustration computer">
              <div className="element background" />
              <div className="element laptop levitation-3" />
              <div className="system">
                <div className="circle index-1" />
                <div className="circle index-2" />
                <div className="circle index-3" />
                <div className="disc index-1">
                  <div className="inner" />
                </div>
                <div className="disc index-2">
                  <div className="inner" />
                </div>
                <div className="disc index-3">
                  <div className="inner" />
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="text">
              <h4 className="title">Share only as much as You want</h4>
              <p className="paragraph">You decide who gets to do what in your project!
Let some members work along with you with editing rights, while some other members just open it to see the live changes only, all at the same time!</p>
            </div>
            <div className="illustration astronaut">
              <div className="element background" />
              <div className="element guy levitation-3" />
              <div className="element green-book levitation-2" />
              <div className="element red-book levitation-1" />
              <div className="element cloud-pc levitation-2" />
              <div className="element cloud-only levitation-1" />
              <div className="system">
                <div className="circle index-1" />
                <div className="circle index-2" />
                <div className="circle index-3" />
                <div className="disc index-1">
                  <div className="inner" />
                </div>
                <div className="disc index-2">
                  <div className="inner" />
                </div>
                <div className="disc index-3">
                  <div className="inner" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section get-started" id="get-started">
          <div className="background" />
          <div className="illustration">
            <div className="center">
              <div className="circle index-1" />
              <div className="circle index-2" />
              <div className="circle index-3" />
              <div className="circle index-4" />
              <div className="circle index-5" />
              <div className="disc index-1">
                <div className="inner" />
              </div>
              <div className="disc index-2">
                <div className="inner" />
              </div>
              <div className="disc index-3">
                <div className="inner" />
              </div>
              <div className="disc index-4">
                <div className="inner" />
              </div>
              <div className="disc index-5">
                <div className="inner" />
              </div>
            </div>
          </div>
          <div className="content">
            <h3 className="main-title">Get started</h3>
            <div className="step">
              <div className="number">1.</div>
              <p className="paragraph title">Create a file</p>
              <p className="paragraph">Simply click on  <a href="/createnew">New Document</a> and make a new password-protected Kalam file.</p>

              <p className="paragraph small">Didn’t work? <a href="mailto:divyanshsikarwar@gmail.com" target="_blank">Report a bug</a>.</p>
            </div>
            <div className="step">
              <div className="number">2.</div>
              <p className="paragraph title">Share the access</p>
              <p className="paragraph">Click on the “copy….” or “copy ... “ option at the bottom of your text editor, as per your needs.
The respective credentials will get copied to your clipboard.</p>
              <p className="paragraph">Share the credentials with your audience or co-workers!</p>
              <p className="paragraph small">Didn’t work? <a href="mailto:divyanshsikarwar@gmail.com" target="_blank">Report a bug</a>.</p>
            </div>
            <div className="step">
              <div className="number">3.</div>
              <p className="paragraph title">Open the document</p>
              <p className="paragraph">To open any already created document, simply go to the <a href="/opendocument">Open Document</a> button on the home page.</p>
              <p className="paragraph">Enter the credentials that you have!</p>
              <p className="paragraph">You will now be able to see or edit the contents of the project, updated in real-time.</p>
              <p>*Note:- People with Viewer’s credentials will not be able to edit the project.</p>
            </div>
            <div className="step">
              <div className="number">4.</div>
              <p className="paragraph title">Get working</p>
            </div>
          </div>
        </section>
        <section className="section whos-using-it" id="whos-using-it">
          <h3 className="main-title" id="kalam">कलम</h3>
          <p className="paragraph" id="bharat">भारत में निर्मित टेक्स्ट संपादक</p>

        </section>
        <footer className="section footer">
          <span className="background" /> <span className="background-2" />
          <div className="content">
            <div className="lists">
              <ul className="list">
                <li className="title">Kalam</li>
                <li className="item"><a className="underline features js-scroll-item" href="#features">Features</a></li>
                <li className="item"><a className="underline get-started js-scroll-item" href="#get-started">Get started</a></li>

              </ul>
              <ul className="list">
                <li className="title">Development</li>
                <li className="item"><a className="underline" href="https://github.com" target="_blank">Github</a></li>
                <li className="item"><a className="underline" href="mailto:divyanshsikarwar@gmail.com" target="_blank">Report an issue</a></li>
                <li className="item"><a className="underline" href="mailto:divyanshsikarwar@gmail.com">Contact us</a></li>
              </ul>
            </div>
            <p className="text">Kalam is an open-source project made by <a href="https://www.linkedin.com/in/divyanshsikarwar/" target="_blank">Divyansh Sikarwar</a> and <a href="https://www.linkedin.com/in/suraj-ajay-dwivedi-a5b2051a9/" target="_blank">Suraj Dwivedi</a>.</p>
          </div>
        </footer>
        <div class="objects" >
          <div class="earth-moon">
          <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"></img>
                      <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"></img>
                      <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"></img>
                  </div></div>
      </div> </>
      
    )
}


export default Home;


/*        <>
    <Header />
    <div >
     <h1 id="Title" >Kalam</h1>
     <h4 id="tagline">Real-time code sharing for your lectures and presentations</h4>
     <ul  ><li id="whats"><a  class="btn-request">What is Kalam ?</a></li></ul>
     </div>



        </>*/