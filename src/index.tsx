import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api'
    
    this.get('/transactions', () => {
      return [
        {
          id: 15,
          name: 'cartão',
          amount: 548,
          type: 'deposit',
          category: 'gastos',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
