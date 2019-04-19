import React from 'react';
import BodyCard from './Card';

function Body() {
  return(
    <div className="main-page">
    <style jsx>{`
      hr {
        width: 10%;
        height: 3px;
        border: none;
        background-color: rgb(255, 210, 55);
      }
      
      .mission {
        margin: 0 10vw;
      }
      
      p {
        font-family: "Ivar Headline", "Times New Roman", serif;
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        margin: 72px 0;
        margin-left: 10vw;
        margin-right: 10vw;
        line-height: 42px;
        letter-spacing: 0px;
        padding: 0px 38px;
      }
    `}</style>
      <div className="mission">
        <p>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
      </div>
      <hr></hr>
      <BodyCard/>
    </div>
  );
}

export default Body