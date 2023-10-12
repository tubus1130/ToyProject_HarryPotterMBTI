/*
    시작 화면, 사용자에게 시작을 유도하고
    퀴즈에 대해 소개하는 화면
*/
import React from 'react'
import {Button, Title} from '../styles/styledComponents'

const homeContainer = {
    textAlign: "center"
}

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div style={homeContainer}>
        <Title style={{color : "#113946"}}><h1>해리포터 기숙사 배정<br />MBTI</h1></Title>
        <img src={"images/hogwart.jpg"}
        width="200" height= "200" display="inline-block" border-radius="10px"/><br />  
        <p style={{color: "#113946"}}>과연 모자의 선택은...?</p>
        <Button onClick={this.props.goTest}>배정받기</Button>
    </div>
  }
}

export default Home;