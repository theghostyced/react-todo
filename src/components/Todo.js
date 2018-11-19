import React from 'react';
import TodoInput from './TodoInput';


class Todo extends React.Component{

    render(){
        return (
        <div>
            <div className='todo'>
              <TodoInput />
            </div>
        </div>
        )
    }
}

export default Todo;