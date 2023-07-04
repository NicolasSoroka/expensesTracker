import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';


const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id : window.crypto.randomUUID(),
      description,
      amount
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Enter a description'/>
        <input onChange={(e) => setAmount(e.target.value)} type="number" min={0} step={0.5} placeholder='0.0'/>
        <button>
          Add transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm