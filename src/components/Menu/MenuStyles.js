import { finalDeltaPositions } from '../../util/Util';
import {
  MAIN_BUTTON_DIAM, CHILD_BUTTON_DIAM, M_X, M_Y
} from '../../constants/Constants';


export function mainButton() {
  return {
    width: MAIN_BUTTON_DIAM,
    height: MAIN_BUTTON_DIAM,
    top: M_Y - (MAIN_BUTTON_DIAM / 2),
    left: M_X - (MAIN_BUTTON_DIAM / 2),
  };
}

export function childButtonBefore() {
  return {
    width: CHILD_BUTTON_DIAM,
    height: CHILD_BUTTON_DIAM,
    top: M_Y - (CHILD_BUTTON_DIAM / 2),
    left: M_X - (CHILD_BUTTON_DIAM / 2),
  };
}

export function childButtonAfter(i) {
  const { deltaX, deltaY } = finalDeltaPositions(i);
  return {
    width: CHILD_BUTTON_DIAM,
    height: CHILD_BUTTON_DIAM,
    left: M_X + deltaX,
    top: M_Y - deltaY,
  };
}
