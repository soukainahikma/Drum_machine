import './App.css'
// import { useState } from 'react'
function Buttons(props) {
	function PlayMusic() {
		props.item[0].name.play()
	}
	return (<div>
		<div className="container-fluid">
			<div className=" row">
				<div className="row">
					<button id="Q"className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>Q</button>
					<button id="W"className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>W</button>
					<button id="E"className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>E</button>
				</div>
				<div className="row">
					<button id="A"className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>A</button>
					<button id="S"className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>S</button>
					<button id="D"className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>D</button>
				</div>
				<div className="row">
					<button id="Z" className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>Z</button>
					<button id="X" className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>X</button>
					<button id="C" className="col-md-4 col-sm-4 drum-pad" onClick={PlayMusic}>C</button>
				</div>
			</div>
		</div>
	</div>
	)
}
export default Buttons;