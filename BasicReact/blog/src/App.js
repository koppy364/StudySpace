import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [Header, setHeader] = useState(['남자 코트 추천','광주 맛집 추천', '리액트 독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [Good, setGood] = useState(0);

  return (
    <div className="App">
        <div className="black-nav">
          <h1 style={ {color:'red', fontSize: '16px'}}>{ logo }</h1>
        </div>

        <button onClick={() => {
            let copy = [...Header];
            copy.sort();
            setHeader(copy);
        }}>가나다순정렬</button>

        <button onClick={() => {
          let copy = [...Header];
          copy[0] = '여자 코트 추천';
          setHeader(copy);
        }}>글수정</button>

        <div className="list">
          <h4>{ Header[0] } <span onClick={() => setGood(Good+1)}>👍</span> {Good} </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ Header[1] }</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ Header[2] }</h4>
          <p>2월 17일 발행</p>
        </div>
      
        <Modal></Modal>
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}

export default App;
