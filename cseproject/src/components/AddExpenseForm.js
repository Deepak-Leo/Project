// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import { v4 as uuidv4 } from 'uuid';

// const AddExpenseForm = (props) => {
// 	const { dispatch } = useContext(AppContext);

// 	const [name, setName] = useState('');
// 	const [cost, setCost] = useState('');

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		const expense = {
// 			id: uuidv4(),
// 			name,
// 			cost: parseInt(cost),
// 		};

// 		dispatch({
// 			type: 'ADD_EXPENSE',
// 			payload: expense,
// 		});

// 		setName('');
// 		setCost('');
// 	};

// 	return (
// 		<form onSubmit={onSubmit}>
// 			<div class='row'>
// 				<div class='col-sm col-lg-4'>
// 					<label for='name'>Name</label>
// 					<input
// 						required='required'
// 						type='text'
// 						class='form-control'
// 						id='name'
// 						value={name}
// 						onChange={(event) => setName(event.target.value)}
// 					/>
// 				</div>
// 				<div class='col-sm col-lg-4'>
// 					<label for='cost'>Cost</label>
// 					<input
// 						required='required'
// 						type='number'
// 						class='form-control'
// 						id='cost'
// 						value={cost}
// 						onChange={(event) => setCost(event.target.value)}
// 					/>
// 				</div>
// 			</div>
// 			<div class='row mt-3'>
// 				<div class='col-sm'>
// 					<button type='submit' class='btn btn-primary'>
// 						Save
// 					</button>
// 				</div>
// 			</div>
// 		</form>
// 	);
// };

// export default AddExpenseForm;




import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const AddExpenseForm = () => {
  const { dispatch, expenses } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event, expenses) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    // Update the JSON file with the new data
    axios.post('path/to/your/data.json', { expenses: [...expenses, expense] })
      .then(() => {
        console.log('Data updated successfully');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });

    setName('');
    setCost('');
  };

  return (
    <form onSubmit={(event) => onSubmit(event, expenses || [])}>
      <div className='row'>
        <div className='col-sm col-lg-4'>
          <label htmlFor='name'>Name</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='col-sm col-lg-4'>
          <label htmlFor='cost'>Cost</label>
          <input
            required='required'
            type='number'
            className='form-control'
            id='cost'
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;