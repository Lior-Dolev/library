import type { Point } from 'geojson';
import { fromLatLon, toLatLon } from 'utm';

const isValidPoint = (position: Point): boolean => {
  if (!position || typeof position !== 'object') {
    return false;
  }

  const targetPosition = position.coordinates;

  if (
    !targetPosition ||
    !Array.isArray(targetPosition) ||
    targetPosition.length < 2 ||
    typeof targetPosition[0] !== 'number' ||
    typeof targetPosition[1] !== 'number'
  ) {
    return false;
  }

  return true;
};

export const formatPointToUTM = (position: Point): string => {
  if (!isValidPoint(position)) {
    return '';
  }

  const targetPosition = position.coordinates;
  const { easting, northing, zoneNum } = fromLatLon(targetPosition[1], targetPosition[0]);

  return `Zone: ${zoneNum} X: ${Math.round(easting)}, Y: ${Math.floor(
    northing / 1000000,
  )} ${Math.round(northing % 1000000)}`;
};

export const formatPointToShortUTM = (position: Point, reverse: boolean = false): string => {
  if (!isValidPoint(position)) {
    return '';
  }

  const targetPosition = position.coordinates;
  const { easting, northing } = fromLatLon(targetPosition[1], targetPosition[0]);

  return reverse
    ? `${Math.round(northing % 1000000)} / ${Math.round(easting)}`
    : `${Math.round(easting)} / ${Math.round(northing % 1000000)}`;
};

type UTMData = {
  y: string;
  yMostSignificateDigit: string;
  x: string;
  zone: string;
  pole: Pole;
};

enum Pole {
  N,
  S,
}

const parseCoordinateString = (coordString: string): UTMData => {
  const stringParts = coordString
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((word) => word !== '');

  const coordData: UTMData = {
    y: '0',
    yMostSignificateDigit: '0',
    x: '0',
    zone: '0',
    pole: Pole.N,
  };

  let currentIndex = 0;

  if (stringParts[currentIndex] === 'zone:') {
    coordData.zone = stringParts[currentIndex + 1];
    currentIndex += 2;
  }

  if (
    stringParts[currentIndex].charAt(0) === '(' &&
    stringParts[currentIndex].charAt(stringParts[currentIndex].length - 1) === ')'
  ) {
    coordData.pole = Pole.S;
    currentIndex++;
  }

  if (stringParts[currentIndex] === 'x:') {
    coordData.x = stringParts[currentIndex + 1].replace(',', '');
    currentIndex += 2;
  }

  if (stringParts[currentIndex] === 'y:') {
    coordData.yMostSignificateDigit = stringParts[currentIndex + 1];
    coordData.y = stringParts[currentIndex + 2];
  }

  return coordData;
};

export const formatUTMToPoint = (stringifiedUTM: string): Point => {
  const { x, y, yMostSignificateDigit, zone, pole } = parseCoordinateString(stringifiedUTM);
  const north = pole === Pole.N;
  const combinedY = yMostSignificateDigit + y;

  const { latitude, longitude } = toLatLon(+x, +combinedY, +zone, undefined, north);

  return {
    type: 'Point',
    coordinates: [longitude, latitude],
  };
};
