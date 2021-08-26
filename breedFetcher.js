const request = require("request");

// let cat = process.argv.slice(2);
// let output1 = cat[0];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (body === "[]") {
      callback(null, "This cat breed is not found.");
      return;
    }
    const data = JSON.parse(body);
    callback(null, data[0].description.trim());
    return;
  });
};

module.exports = { fetchBreedDescription };

