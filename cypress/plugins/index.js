require("dotenv").config();

module.exports = (on, config) => {
  const {
    REACT_APP_PROJECT_NAME,
    REACT_APP_PROJECT_WEBSITE_NAME,
    REACT_APP_PROJECT_WEBSITE_URL,
    REACT_APP_PROJECT_APP_URL
  } = process.env;
  config.env = {
    REACT_APP_PROJECT_NAME,
    REACT_APP_PROJECT_WEBSITE_NAME,
    REACT_APP_PROJECT_WEBSITE_URL,
    REACT_APP_PROJECT_APP_URL
  };
  console.log(config.env);
  return config;
};
