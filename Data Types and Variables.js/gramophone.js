function gramophone(bandName, albumName, song) {
  let durationInSeconds =
    (albumName.length * bandName.length * song.length) / 2;
  let rotation = Math.ceil(durationInSeconds / 2.5);
  console.log(`The plate was rotated ${rotation} times.`);
}
gramophone(
  "Rammstein",
  "Sehnsucht",

  "Engel"
);
