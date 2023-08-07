import Http from "./http";
import ENV from "../env";

// SLIDER
const getLangs = () => {
  let data = {};

  return Http.get(`${ENV.API_URL}/lang`, { ...data });
};

// SLIDER
const getSliders = (lang) => {
  let data = {};
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
// REFERENCE LOGO
const getReferenceLogos = (lang) => {
  let data = {};

  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/referenceLogo`, { ...data });
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
const getTreatments = (lang, group, isActive) => {
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

const getTreatmentViaGroupId = (groupId) => {
  return Http.get(`${ENV.API_URL}/treatment/group/${groupId}`);
};
const getGroupViaPerma = (perma) => {
  return Http.get(`${ENV.API_URL}/group/perma/${perma}`);
};

const getTreatmentViaPerma = (perma) => {
  return Http.get(`${ENV.API_URL}/treatment/perma/${perma}`);
};
const getContacts = (lang) => {
  let data = {};
  if (lang) {
    data.lang = lang;
  }
  return Http.get(`${ENV.API_URL}/contact`, { ...data });
};

// Faqs
const getFaqs = (lang, isActive, treatment, general) => {
  let data = {};
  if (lang) {
    data.lang = lang;
  }
  if (isActive) {
    data.isActive = isActive;
  }
  if (treatment) {
    data.treatment = treatment;
  }
  if (general) {
    data.general = general;
  }
  return Http.get(`${ENV.API_URL}/faq`, { ...data });
};
// Reviews
const getReviews = (lang, isActive) => {
  let data = {};

  if (lang) {
    data.lang = lang;
  }
  if (isActive) {
    data.isActive = isActive;
  }

  return Http.get(`${ENV.API_URL}/review`, { ...data });
};

const addRes = (data) => {

  return Http.post(`${ENV.API_URL}/reservation`, { ...data });

};
export default {
  addRes,
  //LANGS
  getLangs,
  //SLIDER
  getSliders,

  //FEATURES
  getFeatures,
  //REFERENCELOGO
  getReferenceLogos,

  //generals
  getGenerals,

  //groups
  getGroups,
  getGroupViaPerma,

  //treatmetn
  getTreatments,
  getTreatmentViaGroupId,
  getTreatmentViaPerma,
  //about
  getAbouts,
  //translate
  getTranslates,
  //contacts
  getContacts,
  //faqs
  getFaqs,
  //reviews
  getReviews
};
