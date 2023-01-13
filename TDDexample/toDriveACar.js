const statusOfKeys = () => {
  let randomKey = Math.ceil(Math.random() * 100);
  return randomKey ? randomKey : false;
};

const carParking = () => {
  return true;
};

module.exports = {
  statusOfKeys: statusOfKeys(),
  carParking: carParking(),
};
