import React from 'react';

import Card from '../../Card';

import styles from './styles.scss';

class AllResults extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResults(collection) {
    return (
        collection.slice(0, 3).map((el, i) => {
          return (
            <Card
              small
              header={el.title}
              image={el.thumb}
              key={i}
            />
          )
        })
    );
  }

  render() {
    if (this.props.artistSearchResults.length <= 0 &&
        this.props.albumSearchResults.length <=0 ) {
          return (<div>Nothing found.</div>);
        }

    return (
      <div className={styles.all_results_container}>

        <div className={styles.column}>
          <h3>Artists</h3>
          <div className={styles.row}>
            { this.renderResults(this.props.artistSearchResults) }
          </div>
        </div>

        <div className={styles.column}>
          <h3>Albums</h3>
          <div className={styles.row}>
            { this.renderResults(this.props.albumSearchResults) }
          </div>
        </div>

      </div>
    );
  }
}

export default AllResults;
