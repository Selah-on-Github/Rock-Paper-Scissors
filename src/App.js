import {useState} from "react";
import './App.css';
import Box from "./component/Box";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다. 
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.

// 과제1 : 컴퓨터 결과 보이게 하기
// 과제2. 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면)

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
  const play=(userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);  //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    
    return choice[final];
  };
  
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
  
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
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
                      
