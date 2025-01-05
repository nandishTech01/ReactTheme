import axios from 'axios';

export const registerUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/register', user);
    dispatch({ type: 'REGISTER_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_USER_FAILURE', payload: error.message });
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_USER_FAILURE', payload: error.message });
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/users/me');
    dispatch({ type: 'FETCH_USER_PROFILE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_PROFILE_FAILURE', payload: error.message });
  }
};