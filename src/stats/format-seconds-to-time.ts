import {
  minutesInHour,
  secondsInMinute,
  secondsToHours,
  secondsToMinutes,
} from 'date-fns';
import { padLeft } from './pad-left';

export const formatSecondsToTime = (seconds: number): string => {
  return (
    padLeft(secondsToHours(seconds)) +
    ':' +
    padLeft(secondsToMinutes(seconds) % minutesInHour) +
    ':' +
    padLeft(seconds % secondsInMinute)
  );
};
