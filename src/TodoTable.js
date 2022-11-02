import React from 'react';

export default function TodoTable(props) {
  
  

    return (
    <div>
      <table id="todotable"><tbody>
      {
        props.todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <td><button onClick={e => props.clearTodo(index, e)}>Clear Todo</button></td>
          </tr>)
        }
        </tbody></table>    
    </div>
  )
}
