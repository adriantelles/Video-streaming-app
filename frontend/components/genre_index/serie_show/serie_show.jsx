// NB: possible point of failure because serie is passed down through props

import React from 'react';
import SerieShowContainer from './serie_show_container';
import SerieOverview from './serie_overview/serie_overview';
import SerieEpisodes from './serie_episodes/serie_episodes';

class SerieShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSerie(this.props.serieId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.serieId !== this.props.serieId) {
      this.props.fetchSerie(newProps.serieId);
    }
  }

  render() {
    if (!this.props.serie.id) return null;
    const serie = this.props.serie;
    return(
      <div className='serie-expand'>
        <SerieEpisodes serie={this.props.serie}/>
      </div>
    );
  }
}

export default SerieShow;

// <div className='serie-overview-left'>
//   <section className='serie-overview-left-container'>
//     <h2>{serie.name}</h2>
//     <ul className='serie-overview-list'>
//       <li>{serie.avg_review} Stars</li>
//       <li>{serie.year}</li>
//       <li className='mpaa-rating'>TV-{serie.mpaa_rating}</li>
//     </ul>
//     <p>{this.props.serie.description}</p>
//   </section>
// </div>
// <div className='serie-overview-right'>
//   <section className='serie-overview-right-container'>
//     <div className='serie-overview-video'></div>
//   </section>
// </div>
