// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './components/app'
// ReactDOM.render(<App />, document.getElementById('root'))

const ready = () => {
  const btn = document.querySelector('.btn')
  btn.addEventListener('click', () => {
    document.body.classList.toggle('text-red')
  })
}

document.addEventListener('DOMContentLoaded', ready)
