let request = require("request");
let chalk = require("chalk");
const weather = (lat, long, callBack) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=5eeb0683fc2e551ed03be05095fd6dd9`;
  console.log(url)
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callBack(chalk.red.inverse("internet connecion error"), undefined);
    } else if (body.message) {
      callBack(chalk.red.inverse("unable to get data"), undefined);
    } else {
      //console.log(`The current temperature is ${response.body.current.temp} and The weather is ${response.body.current.weather[0].description} `)
      callBack(
        undefined,
        `In ${body.timezone} The current temperature is ${body.current.temp} and The weather is ${body.current.weather[0].description}`
      );
      //℃=K-273.15  formula to convert in degree celsious
      //.toFixed(2) to fixed the decimal value
    }
  });
};
module.exports = weather;
