// eslint-disable-next-line no-unused-vars
let myNameSpace = (function () {
  function searchSite() {
    let searchButton = document.getElementsByClassName(
      "gsc-search-button gsc-search-button-v2"
    );
    searchButton[0].click();
  }
  function feelingLucky() {
    let topics = [
      "Cold",
      "Warm",
      "Hot",
      "Religion",
      "Home",
      "Family",
      "Friends",
      "Love",
      "Hate",
      "Political",
      "Time",
      "Literature",
      "Pop Culture",
      "Emotions",
      "Current Events",
      "How-To",
      "Music",
      "History",
      "Education",
      "Health",
      "Money",
      "Self",
      "Celebration",
      "Food",
      "Holiday",
      "Vacation",
      "blank",
      "Indoor",
      "Outdoor",
      "Task",
      "Opinion",
      "Controversy",
      "Hobby",
      "Mental",
      "Health",
      "Confidence",
      "Nature",
      "Vintage",
      "Religion",
      "Fiction",
      "Non-Fiction",
      "Law",
      "Animals",
      "People",
      "Criticism",
      "Career",
      "Sports",
      "Recreation",
      "Children",
      "Adults",
      "Happy",
      "Sad",
      "Art",
      "Technology",
      "Favorite",
      "Motivation",
      "Inspiration",
      "Winter",
      "Fall",
      "Spring",
      "Summer",
      "Memories",
    ];
    let i = Math.floor(Math.random() * topics.length);
    let q = topics[i];
    document.getElementById("btn_lucky").onclick = function () {
      window.open("http://google.com/search?q=" + q);
    };
  }
  return {
    searchSite: searchSite,
    feelingLucky: feelingLucky,
  };
})();
