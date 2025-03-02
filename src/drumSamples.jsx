const rapPath = "/drum-machine/public/samples/rap/";
const afroPath = "/drum-machine/public/samples/afro/";

const afroSamples = {
  q: afroPath.concat("Bongo 03.wav"),
  w: afroPath.concat("Bongo 04.wav"),
  e: afroPath.concat("Clap Mono.wav"),
  a: afroPath.concat("Clap Secrets.wav"),
  s: afroPath.concat("Kick Dance.wav"),
  d: afroPath.concat("Rim Matter.wav"),
  z: afroPath.concat("Shaker Cereal.wav"),
  x: afroPath.concat("Shaker Key.wav"),
  c: afroPath.concat("Snap DO IT.wav"),
};

const rapSamples = {
  q: rapPath.concat("CTS_Kick1.wav"),
  w: rapPath.concat("CTS_Kick2.wav"),
  e: rapPath.concat("CYM.wav"),
  a: rapPath.concat("HH.wav"),
  s: rapPath.concat("L.MD Snare (21).wav"),
  d: rapPath.concat("OH.wav"),
  z: rapPath.concat("S&C5.wav"),
  x: rapPath.concat("TS Perc_3.wav"),
  c: rapPath.concat("TS Pizzicato.wav"),
};

export { afroSamples, rapSamples };
