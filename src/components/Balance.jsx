import React from 'react'
import { useGlobalState } from '../context/GlobalState'

const Balance = () => {

  const data = useGlobalState();

  return (
    <div>
      <h1>Balance</h1>
    </div>
  )
}

export default Balance