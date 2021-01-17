import { SHOW_ALERT } from '../../types/alert';

export const showAlertAction = value => ({
  type: SHOW_ALERT,
  payload: value
});