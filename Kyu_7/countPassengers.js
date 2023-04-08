var number = function (busStops) {
  let numPassengers = 0;

  for (let i = 0; i < busStops.length; i++) {
    numPassengers += busStops[i][0] - busStops[i][1];
  }

  return Math.max(numPassengers, 0);
};
