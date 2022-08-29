const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations, "Sample Star Token", "TOKEN", 1000);
};
