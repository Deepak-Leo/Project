// import React, { createContext, useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// export const AppReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD_EXPENSE':
// 			return {
// 				...state,
// 				expenses: [...state.expenses, action.payload],
// 			};
// 		case 'DELETE_EXPENSE':
// 			return {
// 				...state,
// 				expenses: state.expenses.filter(
// 					(expense) => expense.id !== action.payload
// 				),
// 			};
// 		case 'SET_BUDGET':
// 			return {
// 				...state,
// 				budget: action.payload,
// 			};

// 		default:
// 			return state;
// 	}
// };

// const initialState = {
// 	budget: 2000,
// 	expenses: [
// 		{ id: uuidv4(), name: 'Shopping', cost: 50 },
// 		{ id: uuidv4(), name: 'Holiday', cost: 300 },
// 		{ id: uuidv4(), name: 'Transportation', cost: 70 },
// 	],
// };

// export const AppContext = createContext();

// export const AppProvider = (props) => {
// 	const [state, dispatch] = useReducer(AppReducer, initialState);
// 	return (
// 		<AppContext.Provider
// 			value={{
// 				expenses: state.expenses,
// 				budget: state.budget,
// 				dispatch,
// 			}}
// 		>
// 			{props.children}
// 		</AppContext.Provider>
// 	);
// };





// AppContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialData from '../data.json'; // Update the import path

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const newExpense = action.payload;
      const updatedExpenses = [...state.expenses, newExpense];

      // Update the JSON file with the new data
      updateDataJson(updatedExpenses);

      return {
        ...state,
        expenses: updatedExpenses,
      };

    case 'DELETE_EXPENSE':
      const expenseIdToDelete = action.payload;
      const filteredExpenses = state.expenses.filter(expense => expense.id !== expenseIdToDelete);

      // Update the JSON file with the new data
      updateDataJson(filteredExpenses);

      return {
        ...state,
        expenses: filteredExpenses,
      };

    case 'SET_BUDGET':
      const newBudget = action.payload;

      // Update the JSON file with the new data
      updateDataJson(state.expenses, newBudget);

      return {
        ...state,
        budget: newBudget,
      };

    case 'SET_INITIAL_DATA':
      return {
        ...state,
        expenses: action.payload.expenses || [],
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [],
};

// Function to update the data.json file
const updateDataJson = (expenses, budget) => {
  const updatedData = { expenses, budget };
  // Assuming the data.json file is in the public folder
  fetch('/data.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then(() => {
      console.log('Data updated successfully');
    })
    .catch((error) => {
      console.error('Error updating data:', error);
    });
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // Use initial data from the imported JSON file
    dispatch({
      type: 'SET_INITIAL_DATA',
      payload: initialData,
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};