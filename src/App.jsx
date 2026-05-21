import { use, useState } from 'react'
import './App.css'

function Square({value,onClick}) {

  let execute = ()=> {

}

  return <button className='square' onClick={onClick}>{value}</button>
}
function App() {
  let [square,setSquare] = useState(Array(9).fill(null))
  let [xturn,setXturn] = useState(true)
  let End = winner(square)
  let status
  if(End) {
    status = "the winner is " + End
  }
  else if ((square.every((item)=> item !== null)) && !End) {
    status = "draw"
  }
  else {
    status = "next player: " +(xturn? "x":"o")
  }


 

  let execute = (i)=> {

    if(square[i] || winner(square) ) return //  لو المربع كان فيه كلام اطلع ومتعملش حاجة وده عشان ملعبش في نفس المربع مرتين  
    // ولو حد كسب اطلع ومتعملش حاجة عشان اللعبة متكملش بعد ما خلصت
    let newSquare = [...square]
    if(xturn) {
        newSquare[i]='x'//الربط بين الفنكشن أرجيومنت والأراى إنديكس فبالتالى لمااضغط على مربع اللى هبتغيرالمربع ده بس 
    }
    else {
      newSquare[i]='o'
    }
    setSquare(newSquare)
    setXturn(!xturn)
  }


  function winner(square) {
    let lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8],
    ]
    for(let i = 0;i<lines.length;i++) {
      let [a,b,c] = lines[i]
      if(square[a] && square[a]===square[b] && square[a]===square[c]) {
        return square[a]
      }
    }
    return null

  }

return (
  <>
  <h1 className='title'>Tic-Tac-Toe</h1>
  <div className="status">{status}</div>
  <div className="container">
    <div className="gameboard">
      {square.map((item,index)=> {
        return (
              <Square className="square" onClick={()=> execute(index)}value={item}></Square>
        )
      })}
  
      {/* بدل ما اكتب نفس الكود 9 مرات عملت فور لوب 
      <Square className="square" onClick={()=> execute(0)}value={square[0]}></Square> ب
      <Square className="square" onClick={()=> execute(1)}value={square[1]}></Square>
      <Square className="square" onClick={()=> execute(2)}value={square[2]}></Square>
      <Square className="square" onClick={()=> execute(3)}value={square[3]}></Square>
      <Square className="square" onClick={()=> execute(4)}value={square[4]}></Square>
      <Square className="square" onClick={()=> execute(5)}value={square[5]}></Square>
      <Square className="square" onClick={()=> execute(6)}value={square[6]}></Square>
      <Square className="square" onClick={()=> execute(7)}value={square[7]}></Square>
      <Square className="square" onClick={()=> execute(8)}value={square[8]}></Square> */}
      </div>
      </div>

  </>
)


}


export default App
 