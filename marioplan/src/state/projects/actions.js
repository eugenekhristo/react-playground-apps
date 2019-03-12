export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_PROJECT_ERROR = 'ADD_PROJECT_ERROR';

export function addProject(project) {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const newProject = {
      ...project,
      authorId: 12345,
      authorFirstName: 'Millie Bobby',
      authorLastName: 'Brown',
      createdAt: new Date()
    };

    const firestore = getFirestore();
   
    firestore
      .collection('projects')
      .add(newProject)
      .then(
        dispatch({
          type: ADD_PROJECT,
          payload: project
        })
      )
      .catch(err => {
        dispatch({
          type: ADD_PROJECT_ERROR,
          payload: err
        });
      });
  };
}
