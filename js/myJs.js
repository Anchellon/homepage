// eslint-disable-next-line no-unused-vars
let myNameSpace = (function () {
  function searchSite() {
    let searchButton = document.getElementsByClassName(
      "gsc-search-button gsc-search-button-v2"
    );
    searchButton[0].click();
  }
  function feelingLucky() {
    let searchButton = document.getElementsByClassName(
      "gsc-search-button gsc-search-button-v2"
    );
    searchButton[0].click();
  }
  return {
    searchSite: searchSite,
    feelingLucky: feelingLucky,
  };
})();
