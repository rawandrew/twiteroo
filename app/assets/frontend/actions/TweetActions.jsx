import API from "../API"

export default {
  getAllTweets() {
    console.log(1, "TweetActions");
    API.getAllTweets();
  }
}