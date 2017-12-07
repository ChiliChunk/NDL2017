import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';

/**
 * 
 * @param {*} constants 
 */
export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

/**
 * 
 * @param {*} initialState 
 * @param {*} reducerMap 
 */
export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}

/**
 * 
 * @param {*} response 
 */
export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response;
    throw error;
  }
}

/**
 * 
 * @param {*} response 
 */
export function checkPermissions(response) {
  console.dir(response)
  if (response.status >= 400 && response.status < 500) {
    var error = new Error('Erreur Permissions insuffisantes')
    error.response = response
    throw error
  }
  else
    return response
}

/**
 * 
 * @param {*} response 
 */
export function parseJSON(response) {
  return response.json()
}
