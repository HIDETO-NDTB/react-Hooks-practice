import React, { useReducer, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import Event from './Event';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = e => {
    e.preventDefault();
    if (window.confirm('全てのイベントを削除してよろしいですか？')) {
      dispatch({
        type: 'DELETE_ALL_EVENTS'
      })
    }
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" onChange={e => setTitle(e.target.value)} value={title}/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" onChange={e => setBody(e.target.value)} value={body} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={ !(title && body) }>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={ state.length===0 }>全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event) => (
            <Event key={event.id} event={event} dispatch={dispatch}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;