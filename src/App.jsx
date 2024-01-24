import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkButton from './components/SkButton';
import Hello from './components/Hello';
import Random from './components/Random';

function App() {

  return (
      <div>
        <h1>Hello World!</h1>
        <SkButton></SkButton>
        <Hello></Hello>
        <Random></Random>
        <Random></Random>
        <Random></Random>
        <Random></Random>
      </div>
  )
}

export default App
