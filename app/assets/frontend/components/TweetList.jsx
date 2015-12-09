import Tweet from "./Tweet"

export default class TweetList extends React.Component {
  render() {
    return (
      <div>
        <ul classNme="collection">
          <Tweet />
          <Tweet />
          <Tweet />
        </ul>
      </div>
    );
  }
}