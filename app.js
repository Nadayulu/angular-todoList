angular.module('app', [])
  .component('todoList', {
      template:`
        <div>
            <h1>Todo List</h1>
            <input>
            <button>add</button>
            <ul>
                <li></li>
            </ul>
            <hr/>
            <pre></pre>
        </div>>
      `
  })