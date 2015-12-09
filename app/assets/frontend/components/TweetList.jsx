export default class TweetList extends React.Component {
  render() {
    return (
      <div>
        <ul classNme="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Andrei Crudu</span>
            <p>My #FirstTweet</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Andrei Crudu</span>
            <p>My #SecondTweet</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Andrei Crudu</span>
            <p>My #ThirdTweet</p>
          </li>
        </ul>
      </div>
    );
  }
}