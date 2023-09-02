import './App.css';
import './components/btn';
import './index.css';
import {useState} from "react";
import MyButton from "./components/btn";

import doggo from './assets/muttly-laughing.gif';
import success from './assets/success.gif';

function App() {
    const [lucky, setLucky] = useState(0);
    const [userInput, setUserInput] = useState(0);
    const [started, setStarted] = useState(false);
    const [correct, setCorrect] = useState(false);
    console.log(userInput);
    console.log(lucky);
    const clickHandler = () => {
        const random = Math.floor(Math.random() * 10) + 1; // random value between 1 - 10
        setLucky(random);
        setStarted(true);
    }

    const inputHandler = (e) => {
        console.log(e.target.value);
        setUserInput(e.target.value);
    }

    const checkLucky = () => {
        // eslint-disable-next-line eqeqeq
        if (userInput == lucky) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }

  return (
      <div className='wrapper'>
          {!started && <MyButton onClick={clickHandler} text='Start' myStyle={{
              position: 'absolute',
              top: '10px',
              left: '10px',
          }}/>

          }
          {started ? (<div className='gameBox'>
              <input className="input" type='number' onChange={inputHandler} placeholder="Enter you number"/>
              <MyButton onClick={checkLucky} text='Check'/>
          </div>) :
              (<h1 style={
                  {
                      fontSize: '60px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontFamily: "Black ops one",
                  }
              }>
                  Press start to start the game
              </h1>)
          }
          {correct ?
              <img src={success} alt="doggo laughing" height="300" width="400" className="doggo"/>
              :
              <img src={doggo} alt="success" height="300" width="400" className="doggo"/>
          }
      </div>
  );
}

export default App;
