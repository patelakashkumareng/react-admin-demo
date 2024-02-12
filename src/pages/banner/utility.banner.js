import moment from "moment";
import Constant from "../../config/constant";
import i18n from 'i18next';
// import Constant from "../../config/constant"
export const parseBannerUsedIn = (usedIn) => {
  if (usedIn === 0 || !usedIn) {
    return "Web";
  } else {
    return "App";
  }
};

export const parseBannerType = (type) => {
  //0-LobbyBanner,1-AppBanner
  return type ? "AppBanner" : "LobbyBanner";
};

export const parseBannerSportType = (sportType) => {
  let result = "";
  if (!sportType || sportType === 0) {
    result = "-";
  } else if (sportType || sportType === 1) {
    result = "Normal";
  } else if (+sportType === 2) {
    result = "Retro";
  } else {
    result = "-";
  }
  return result;
};

export const parseBannerStatusToApp = (status) => {
  return status ? "active" : "inactive";
};

export const parseBannerStatusToAPI = (status) => {
  let apiStatus = null;

  if (status === "active") {
    apiStatus = true;
  } else {
    apiStatus = false;
  }

  return apiStatus;
};

export const ConvertDateIntoUTC = (date) => {
  return moment.utc(date).format("YYYY-MM-DD");
};
export const bannerUsedInOptions = [
  { label: "Select Banner used in", value: -1 },
  {
    value: Constant.BANNER.USED_IN.WEB,
    label: i18n.t('web' , {ns: "glossary"}),
  },
  { value: Constant.BANNER.USED_IN.APP,label: i18n.t("app" , {ns: "glossary"}) },
];

export const bannerTypeOption = [
  { value: -1, label: "Select Banner Type" },
  {
    value: Constant.BANNER.TYPE.LOBBY_BANNER,
    label: "LobbyBanner",
  },
  { value: Constant.BANNER.TYPE.APP_BANNER, label: "AppBanner" },
];

export const sportTypeOption = [
  { label: "Select Sport Type", value: -1 },
  { label: "Normal", value: Constant.BANNER.SPORT_TYPE.NORMAL },
  { label: "Retro", value: Constant.BANNER.SPORT_TYPE.RETRO },
];

/**
 * @array contain Screen ID
 */
export const screenIdOption = [
  { label: "Please Select ScreenID", value: -1 },
  { label: "Deposite", value: Constant.SCREEN_IDS.DEPOSITE },
  { label: "KYC", value: Constant.SCREEN_IDS.KYC },
  { label: "Match Detail", value: Constant.SCREEN_IDS.MATCH_DETAILS },
  { label: "Contest Detail", value: Constant.SCREEN_IDS.CONTEST_DETAIL },
];
