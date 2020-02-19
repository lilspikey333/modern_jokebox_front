import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <ul>
        <li onClick={() => props.prevSong()}>Previous</li>
        <li>Play/Pause</li>
        <li onClick={() => props.advanceSong()}>Skip</li>
      </ul>
      <style jsx>{`
      .buttons {
        margin-top: 43%;
        margin-left: 42.5%;
      }
        ul {
          list-style-type: none;
          overflow: hidden;
        }
        li {
          float: left;
          padding: 0 20px 0 0;
          color: white;
        }
        li:hover {
          opacity: 0.6;
        }
        .navigation {
          height: 2vh;
          margin-top: 4vh;
        }
      `}</style>
    </div>
  );
}

export default Buttons;
