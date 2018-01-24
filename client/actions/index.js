import { LIKE_HOME } from '../constants/index';

export const likeHome = (text) => {
  const action = {
    type: LIKE_HOME,
    text
  }
  return action;
}
