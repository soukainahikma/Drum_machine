import './App.css'
// import { useState } from 'react'
function Buttons(props) {
	// function keypress(e){
	// 	// var music = new Audio(listen[e.key.toUpperCase()][1]);
	// 	props.func(props.item[e.target.children[0].id][0])
	// 	e.target.children[0].play()
	// }
	function PlayMusic(e) {
		props.func(props.item[e.target.children[0].id][0])
		e.target.children[0].play()

	}
	return (<div>
		<div className="container-fluid">
			<div className="row">
				<div className="row">
					<button id="Heater-2" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="Q" className="clip" src={props.item["Q"][1]} />Q</button>
					<button id="Heater-1" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="W" className="clip" src={props.item["W"][1]} />W</button>
					<button id="Heater-3" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="E" className="clip" src={props.item["E"][1]} />E</button>
				</div>
				<div className="row">
					<button id="Heater-4" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="A" className="clip" src={props.item["A"][1]} />A</button>
					<button id="Heater-6" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="S" className="clip" src={props.item["S"][1]} />S</button>
					<button id="Dsc_Oh" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="D" className="clip" src={props.item["D"][1]} />D</button>
				</div>
				<div className="row">
					<button id="Heater" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="Z" className="clip" src={props.item["Z"][1]} />Z</button>
					<button id="Kick_n_Hat" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="X" className="clip" src={props.item["X"][1]} />X</button>
					<button id="Cev_H2" className="col-md-4 col-sm-4 drum-pad" /* onkeydown={keypress} */ onClick={PlayMusic}><audio id="C" className="clip" src={props.item["C"][1]} />C</button>
				</div>
			</div>
		</div>
	</div>
	)
}
export default Buttons;