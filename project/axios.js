const axios = require("axios");
const { json } = require("body-parser");
//const select = document.querySelector("select");
//const option = select[0].value;
//console.log(option, select);
// const text = option.textContent;

function fetchInfos(body) {
  return new Promise((resolve, reject) => {
    var data = JSON.stringify({
      option,
    });
    console.log(data);
    var options = {
      url: "http://localhost:3006/communaute/:id",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
        "Access-Control-Allow-Origin": "*",
      },
      data,
    };
    axios(options)
      .then((response) => {
        console.log("toto");
        resolve();
      })
      .catch((error) => {
        console.warn(error);
        reject(error);
      });
  });
}

exports.fetchInfos = fetchInfos;
