import Http from "./http";
import ENV from "../env";

// SLIDER
const getLangs = () => {
  let data = { };

  return Http.get(`${ENV.API_URL}/lang`, { ...data });
};

// SLIDER
const getSliders = (lang) => {
  let data = { };
 if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/slider`, { ...data });
};

// FEATURES
const getFeatures = (lang) => {
  let data = {};

  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/feature`, { ...data });
};
// GROUPS
const getGroups = (limit, skip, lang) => {
  let data = {};

  if (limit) {
    data.limit = limit;
  }
  if (skip) {
    data.skip = skip;
  }
  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/group`, { ...data });
};


//Treatment
const getTreatments = (lang, group,isActive) => {
  let data = {};
  if (lang) {
    data.lang = lang;
  }
  if (group) {
    data.group = group;
  }
  if (isActive) {
    data.isActive = isActive;
  }
  return Http.get(`${ENV.API_URL}/treatment`, { ...data });
};

// Abouts
const getAbouts = (lang) => {
  let data = {};

  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/about`, { ...data });
};
//Generals
const getTranslates = (lang) => {
  let data = {};
  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/translate`, { ...data });
};


//Generals
const getGenerals = (lang) => {
  let data = {};
  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/general`, { ...data });
};
export default {

//LANGS
getLangs,
  //SLIDER
  getSliders,

  //FEATURES
  getFeatures,

  //generals
  getGenerals,

  //groups
  getGroups,
  //treatmetn
  getTreatments,
  //about
  getAbouts,
  //translate
  getTranslates
};
