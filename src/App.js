import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [link, UseLink] = useState("");
  const [links, UseLinks] = useState([
    "SqHIO2zhxbA",
    "lxGVhhq2jV0",
    "Rc5qrxlJZzc",
    "fx5_pi-1Zqo",
    "g4QA9Sh_g_8",
    "XEJM4Hcgd3M",
    "sd94keSra6A",
    "fjjsrVl_Lgc",
    "tUjKXFrsW74",
    "L0aI7O5KrVU",
    "njp2SpI39pE",
    "AEZa1BtbPok",
  ]);

  const [show, IsShow] = useState(true);

  const idRegex = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/;

  const resetHandler = () => {
    UseLink("");
  };

  const clickHandler = () => {
    let match = idRegex.exec(link);
    if (match === null) {
      return;
    }
    let id = match[1];
    UseLinks([id, ...links]);
    localStorage.setItem("links", JSON.stringify(links));
  };

  const onChange = (e) => {
    console.log("test", link);
    UseLink(e.target.value);
  };

  return (
    <div className="App">
      <button
        className="button menu"
        onClick={() => {
          IsShow(!show);
        }}
      >
        {show === true ? "Küçült" : "Büyült"}
      </button>
      <div
        className="drawer"
        style={{
          visibility: show === true ? "visible" : "hidden",
        }}
      >
        <div className="center">
          Link Giriniz:
          <input
            value={link}
            onInput={(e) => onChange(e)}
            name="link"
            type="url"
          />
          <button className="button" onClick={() => clickHandler()}>
            Ekle
          </button>
          <button className="button" onClick={() => resetHandler()}>
            Temizle
          </button>
        </div>
      </div>
      <div className="container">
        {links.map((val, index) => (
          <iframe
            key={index}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${val}?autoplay=1&mute=1&enablejsapi=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default App;
