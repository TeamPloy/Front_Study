// import logo from './logo.svg';
// eslint-disable

import './App.css';
import { useState } from 'react';

function App() {

  let post = '정하ㅁㄴㅇ눙ㄹ';
  let [a,b] = useState(['킴펨베 코트 추천','호날두 코트 추천','메시 코트 추천']);
  // let num=[1,2];
  
  // let [k,bt]=[1,2];
  
  // let at=num[0];
  // let c=num[1];
  let [good,k] = useState(0);


  function goodf(){
    k(good+1);
  }

  function change(){

    let arr=[1,2,3];
    
    let copy =[...a];
    // ... : 벗기기 입히기
    copy[1]= '여자코트 추천';
    b(copy);
  }
  function sort() {
    let copy=[...a];
    copy[0]=a[0];
    copy[1]=a[2];
    copy[2]=a[1];
    b(copy);
  }
  function Modal(){
    return (
      <>
        <div className='modal'>
          <h4>제목</h4>
          <p>ppap</p>
        </div>
      </>

    )
  }
  return (
    <div className="App">
      <div className="black1">
        {/* <h4 style={{color : 'black', fontSize : '26px'}}>블로그</h4> */}
        <h4>{post}</h4>
      </div>
      <button onClick={sort}>간다ㅏㄹ</button>
      <div className='list'>
        <h4>{a[0]} <span onClick={goodf}>굳</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{a[1]} <span onClick={change}>여자</span></h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <Modal/>
      {/* 
      컴퍼넌트
      1. 반복적인 html 축약할때
      2. 큰 페이지들
      3. 자주변경되는 것들

      단점
      state 가져다쓸 때 문제생김
      */}
      
      {/* <h4>{post}</h4>    */}
      {/* 데이터바인딩 {중괄호} */}
      
    </div>
  );
}

export default App;
