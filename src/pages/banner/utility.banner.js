import moment from "moment";
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
    value: 0,
    label: "Web",
  },
  { value: 1, label: "App" },
];

export const bannerTypeOption = [
  { label: "Select Banner Type", value: -1 },
  {
    value: 0,
    label: "LobbyBanner",
  },
  { value: 1, label: "AppBanner" },
];

export const sportTypeOption = [
  {label: "Select Sport Type", value: 0},
  { label: "Normal", value: 1 },
  { label: "Retro", value: 2 },
];

/**
 * @array contain Screen ID
 */
// 1=Deposit, 2=KYC, 3=Match Detail, 4=Contest Detail

export const screenIdOption = [
  {label: "Please Select ScreenID", value: 0},
  { label: "Deposite", value: 1 },
  { label: "KYC", value: 2 },
  { label: "Match Detail", value: 3 },
  { label: "Contest Detail", value: 4 },
];
