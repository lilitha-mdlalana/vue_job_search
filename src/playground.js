const axios = require("axios");
const url = "http://localhost:3000/jobs";

const getData = async () => {
  await axios.get(url).then((response) => {
    console.log(response.data);
  });
};

const getDataV2 = async () => {
  const response = await axios.get(url);
  const data = response.data;
  console.log(data);
};
getDataV2();
