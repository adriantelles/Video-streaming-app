// NB: possible point of failure because serie is passed down through props

import React from 'react';
import SelectedSerieContainer from './selected_serie_container';

class SelectedSerie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSerie(this.props.serieId);
  }

  render() {
    if (!this.props.serie.id) return null;
    const serie = this.props.serie;
    return(
      <div className='serie-expand-main'>
        <div className='serie-overview-left'>
          <section className='serie-overview-left-container'>
            <h2>{serie.name}</h2>
            <ul className='serie-overview-list'>
              <li>{serie.avg_review} Stars</li>
              <li>{serie.year}</li>
              <li>TV-{serie.mpaa_rating}</li>
            </ul>
          {this.props.serie.description}
          </section>
        </div>
        <div className='serie-overview-right'>
          <section className='serie-overview-right-container'>
            <div className='serie-overview-video'></div>
          </section>
        </div>
      </div>
    );
  }
}

export default SelectedSerie;