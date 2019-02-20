import React, { Component } from "react";
import Cell from "./Cell.jsx";

class Game extends Component {
	constructor() {
		super();
		this.scenarios = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[2, 4, 7],
			[3, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		this.state = {
			player: ["", "", "", "", "", "", "", "", ""],
			turn: "×",
			win: ""
		};
	}

	win() {
		for (var i of "×o") {
			for (var e of this.scenarios) {
				if (this.state.player[e[0]] == i && this.state.player[e[1]] == i && this.state.player[e[2]] == i) {
					this.state.win = i;
					break;
				}
		}
			if (this.state.win == "×" || this.state.win == "o") {
				document.getElementsByClassName("message")[0].innerHTML =
					this.state.win + " WON !!!";
			}
		}
		
		if (!this.state.player.includes('')) {
			document.getElementsByClassName("message")[0].innerHTML = 'That was a Tie'
		}
	}

	play(num) {
		if (!this.state.player[num]) {
		this.state.player[num] = this.state.turn;
		this.forceUpdate();
		this.state.turn = this.state.turn == "×" ? "o" : "×";
		this.win();
		}
	}

	restart() {
		console.log(this.state)// = ''//['', '', '', '', '', '', '', '', ''];
		//this.forceUpdate();
	}

	render() {
		return (
			<div className='mainContainer'>
				<h1 className="message">{this.state.turn}'s Turn</h1>
				<div className="game">
					<div
						className="cell" 
						onClick={() => {
							this.play(0);
						}}
					>
						{this.state.player[0]}
					</div>
					<div
						className="cell" style={{borderLeft:'1px solid black',borderRight:'1px solid black'}}
						onClick={() => {
							this.play(1);
						}}
					>
						{this.state.player[1]}
					</div>
					<div
						className="cell" 
						onClick={() => {
							this.play(2);
						}}
					>
						{this.state.player[2]}
					</div>

					<div
						className="cell" style={{borderTop:'1px solid black',borderBottom:'1px solid black'}}
						onClick={() => {
							this.play(3);
						}}
					>
						{this.state.player[3]}
					</div>
					<div
						className="cell" style={{border:'1px solid black'}}
						onClick={() => {
							this.play(4);
						}}
					>
						{this.state.player[4]}
					</div>
					<div
						className="cell" style={{borderTop:'1px solid black',borderBottom:'1px solid black'}}
						onClick={() => {
							this.play(5);
						}}
					>
						{this.state.player[5]}
					</div>

					<div
						className="cell"
						onClick={() => {
							this.play(6);
						}}
					>
						{this.state.player[6]}
					</div>
					<div
						className="cell" style={{borderLeft:'1px solid black',borderRight:'1px solid black'}}
						onClick={() => {
							this.play(7);
						}}
					>
						{this.state.player[7]}
					</div>
					<div
						className="cell" 
						onClick={() => {
							this.play(8);
						}}
					>
						{this.state.player[8]}
					</div>
					<button onClick={this.restart}>Play Again</button>
				</div>
			</div>
		);
	}
}

export default Game;
