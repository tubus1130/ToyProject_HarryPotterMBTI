/*
    질문을 끝내고 결과를 산출하여 보여주는 컴포넌트
*/
import React from 'react'
import {Button, Title} from '../../styles/styledComponents'

// 결과 내용 들어있는 배열 가져다 놓기
import {resultContent} from '../../utils/resultContent'

class Result extends React.Component{
  constructor(props){
    super(props)
    // result : 성향 파악 후 알려주기 위한 상태값
    // content : 배열에서 결과 하나만 쏙 빼서 저장할 상태
    this.state = {
      result : "",
      content: {}
    }
  }

  // 넘어온 속성들을 가지고 성향 결론짓기!
  componentDidMount(){
    const {e, s, t, j} = this.props.points
    let result = "" // 계산 결과 누산할 임시 변수
    result += e > 0 ? "E" : "I"
    result += s > 0 ? "S" : "N"
    result += t > 0 ? "T" : "F"
    result += j > 0 ? "J" : "P"

    let content; // 성향에 해당하는 결과 객체 하나만 임시 저장할 변수
    // forEach(콜백함수) : 요소 수만큼 콜백함수 호출하는 메소드!
    resultContent.forEach(rc => {
      if(rc.type == result){
        content = rc; // 일치하는 성향의 객체를 임시 저장!
      }
    })

    this.setState({result: result, content: content})
  }

  render(){
    const {content} = this.state // 콘텐츠만 뽑는 구조분해!
    return <div style={{backgroundImage: content.dormimg}}>
        <Title style={{color:"#113946", marginTop:"200px"}}>
          <h2>당신의 성향은 {this.state.result}</h2>
          <img style={{
            width: 300, height: 300, opacity: 0.9
          }}src={content.dormimg}/>
          <h1>기숙사 : {content.dorm}</h1>
          <h2>{content.character}</h2>
          <p>특징 : {content.description}</p>
          <p>대표적인물 : {content.person}</p>
        </Title>
        <Button onClick={this.props.goFirst}
        style={{backgroundColor: "#BCA37F"}}>다시하기</Button>
    </div>
  }
}

export default Result;