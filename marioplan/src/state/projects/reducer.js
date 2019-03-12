import { ADD_PROJECT, ADD_PROJECT_ERROR } from './actions';

const initialState = {
  projects: [
    {
      id: 1,
      title: 'What bro?',
      content:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 2,
      title: 'Nice I love you!',
      content:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      id: 3,
      title: 'Something strange just happened!',
      content:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PROJECT:
      console.log(`Adding new project`, payload);
      return state;

    case ADD_PROJECT_ERROR:
      console.log(`Error occured as adding project: `, payload);
      return state;

    default:
      return state;
  }
};
