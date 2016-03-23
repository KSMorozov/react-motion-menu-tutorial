import {
  DEG_TO_RAD, BASE_ANGLE, SEPARATION_ANGLE, FLY_OUT_RADIUS, CHILD_BUTTON_DIAM
} from '../constants/Constants';

export function toRadians(degrees) {
  return degrees * DEG_TO_RAD;
}

export function finalDeltaPositions(index) {
  const angle = BASE_ANGLE + ( index * SEPARATION_ANGLE );
  return {
    deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - (CHILD_BUTTON_DIAM / 2),
    deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(angle)) + (CHILD_BUTTON_DIAM / 2),
  };
}

export function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }

  if (!step) {
    step = stop < start ? -1 : 1;
  }

  const length = Math.max(Math.ceil((stop - start) / step), 0);
  let range = Array(length);
  
  for (let i = 0; i < length; i++, start += step) {
    range[i] = start;
  }

  return range;
}
