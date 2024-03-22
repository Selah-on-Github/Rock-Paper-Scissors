import {useState} from "react";
import './App.css';
import Box from "./component/Box";

const choice = {
  rock:{
    name:"Rock",
    img:"./images/rock.png"
  },
  scissors:{
    name:"Scissors",
    img:"./images/scissors.png"
  },
  paper:{
    name:"Paper",
    img:"./images/paper.png"
  }
}

function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect]=useState(null);
  const [result,setResult]=useState("");
  const [isStarted, setIsStarted] = useState(false);

  const play=(userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);  //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    
    return choice[final];
  };
  
  const judgement = (user, computer) => {
    // console.log("user", user, "computer", computer);

    // 유저 입장에서
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };
  return (
    !isStarted
    ?
    <div>
      <button onClick={() => setIsStarted(true)}>시작하기</button>
    </div>
    :
    <div className="wrapper">
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
      <button className="scissors" onClick={() => play("scissors")}>가위</button>
      <button className="rock" onClick={() => play("rock")}>바위</button>
      <button className="paper" onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
                      
