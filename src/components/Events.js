import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = ({ state, dispatch }) => {

    // HooksのUseContextを使用
    const value = useContext(AppContext);
    return (
        <>
            {/* Hooksを使わなかった場合 */}
            <AppContext.Consumer>
                {value => { return <div>{ value }</div>}}
            </AppContext.Consumer>
            {/* HooksのUseContextを使用 */}
            <div>{value}</div>
            
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
                        <Event key={event.id} event={event} dispatch={dispatch} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default Events