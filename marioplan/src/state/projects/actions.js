export const ADD_PROJECT = 'ADD_PROJECT';

export function addProject(project) {
  return async dispatch => {
    // doing async stuff

    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }
}