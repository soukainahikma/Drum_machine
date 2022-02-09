import "./App.css"
import Buttons from "./buttons";
function App() {
	var listen =[
		{data_key:"81",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")},
		{data_key:" ",name:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")}
	]
	function keypress(event){
		if(event.charCode === 49)
			listen[2].name.play()
	}
	document.body.addEventListener("keypress",keypress)
	return (
		<div id="drum-machine" style={{ "marginTop": "50%" }}>
				<div id="display" className="row drum-pad text-center">Music</div>
				<Buttons item={listen}/>
		</div>
	);
}

export default App;
