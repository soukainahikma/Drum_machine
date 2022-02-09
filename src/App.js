import "./App.css"
import React, { useState } from 'react';
import Buttons from "./buttons";
function App() {
	var listen ={
		"Q":["Heater-2","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
		"W":["Heater-1","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
		"E":["Heater-3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
		"A":["Heater-4","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],
		"S":["Heater-6","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
		"D":["Dsc_Oh","https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
		"Z":["Heater","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
		"X":["Kick_n_Hat","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"],
		"C":["Cev_H2","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"]
	}
	const [name,setMusic]=useState("Music")
	// function keypress(event){
	// 		var music = new Audio(listen[event.key.toUpperCase()][1]);
	// 		setMusic(listen[event.key.toUpperCase()][0])
	// 		music.play();
	// }
	// document.body.addEventListener("keypress",keypress)
	return (
		<div id="drum-machine" style={{ "marginTop": "50%" }}>
				<div id="display" className="row drum-pad text-center">{name}</div>
				<Buttons item={listen} func={setMusic}/>
		</div>
	);
}

export default App;
