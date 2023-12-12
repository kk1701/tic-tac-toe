import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../../helpers/checkWinner";


function Grid({numberOfCards}){
    const [turn, setTurn] = useState(true);
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState(null);

    function play(index){
        console.log("move played!", index);

        if( turn == true ){
            board[index] = "O";
        } else{
            board[index] = "X";
        }

        const winner = isWinner(board, turn ? "O" : "X");
        if(winner){
            setWinner(winner);
            toast.success( "Congratulations " + winner + " won the game!!");
        }

        setBoard([...board]);   
        setTurn(!turn);

    }

    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return (
        <>
            { winner && (
                <>
                    <h1 className="winner"> Winner is {winner} </h1>
                    <button onClick = {reset} className="restart-btn">Restart</button>
                    <ToastContainer position="top-right" theme="dark" autoClose="5000"/>
                </>
            )}
            <h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map(( value,idx) => {
                    return <Card onPlay={play} player={value} key={idx} index={idx} gameEnd={ winner ? true : false} />
                })} 
            </div>
        </>
    );
}

export default Grid;



// The setter function of a state does not go to the variable explicitly and then make changes, it re renders the component with a new state.
// Value of a state variable will never change in current render, it will change in next re render.

// React waits for all updates in a current event and re renders the component after completing all events.