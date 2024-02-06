import moment from "moment";
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
