/*
    퀴즈를 진행하고, 결과를 보여주는
    나름의 게임(?) 부분을 담당하는 컴포넌트
*/
import React from 'react'
import Question from './game/Question'
import Result from './game/Result'

// 총 질문 수
const NUMBER_OF_QUESTION = 12;

const gameContainer = {
    textAlign: 'center'
}

class Game extends React.Component{
  constructor(props){
    super(props)
    // count : 대답을 들은 질문 수
    // e, s, t, j : 각 타입의 점수를 누산할 상태
    // 1번을 누르면 양수, 2번을 누르면 음수
    this.state = {
        count: 0,
        e: 0,
        s: 0,
        t: 0,
        j: 0
    }
  }

  // 질문 하나 대답하면 넘어가기 + 점수 계산하기
  // btnNum : 1번 눌렀냐(+), 2번 눌렀냐(-)
  // type : e, s, t, j 중 뭐에 대한 문제였냐
  selectAnswer = (btnNum, type) => {
      if(btnNum == 1){
        if(type == 'e'){this.setState({e : this.state.e + 1, count : this.state.count + 1})}
        if(type == 's'){this.setState({s : this.state.s + 1, count : this.state.count + 1})}
        if(type == 't'){this.setState({t : this.state.t + 1, count : this.state.count + 1})}
        if(type == 'j'){this.setState({j : this.state.j + 1, count : this.state.count + 1})}
      }else{
        if(type == 'e'){this.setState({e : this.state.e - 1, count : this.state.count + 1})}
        if(type == 's'){this.setState({s : this.state.s - 1, count : this.state.count + 1})}
        if(type == 't'){this.setState({t : this.state.t - 1, count : this.state.count + 1})}
        if(type == 'j'){this.setState({j : this.state.j - 1, count : this.state.count + 1})}
      }
  }


  render(){

    // Result 에다 e, s, t, j를 넘겨주기 위해 구조분해!
    const {e, s, t, j} = this.state

    return <div style={gameContainer}>
        {this.state.count == NUMBER_OF_QUESTION 
        ? <Result goFirst={this.props.goFirst} points={{e, s, t, j}}/> 
        : <Question count={this.state.count} 
        selectAnswer={this.selectAnswer}/>}
        <p style={{color: "#113946"}}>MADE BY DH</p>
    </div>
  }
}

export default Game;