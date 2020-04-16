const request = require("request");
const chalk = require("chalk");

const getGeo = (address, callBack) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmFiaW5iIiwiYSI6ImNrOTFkZXpzNzAyeTEzbXFlY3Ayc245NjAifQ.LSqUyatlCzXpVmOCU2qjkQ&limit=1`;
  request({ url, json: true }, (error, {body}) => {
    console.log(body.features.length)

    if (error) {
     callBack(chalk.red.inverse("internet connecion error"), undefined);
    } else if (body.features.length==0) {
     callBack(chalk.red.inverse("unable to get data"), undefined);
    } else {
      let lat = body.features[0].center[1];
      let long =body.features[0].center[0];
      callBack(undefined, {
        lat ,
        long
      });
    }
  });
};

module.exports = getGeo;
