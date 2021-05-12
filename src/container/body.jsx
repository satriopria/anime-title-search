import React, { Fragment } from 'react';
import ResultSearch from '../component/resultSearch';
import Loading from '../component/loading';

class BodyHome extends React.Component {
  state = {
    result: [],
    loading: false
  }

  search = _ => {
    this.setState({
      result: [],
      loading: true
    })

    fetch(`https://api.jikan.moe/v3/search/anime?q=${document.getElementById("input").value}`)
      .then(response => response.json())
      .then(data => data.results.map(item =>
        this.setState({
          result: [...this.state.result, {
            key: item.mal_id,
            title: item.title,
            image: item.image_url,
            synopsis: item.synopsis,
            link: item.url,
          }],
          loading: false,
        })
      ))
    // .then(data => data.results.map(e => console.log(e)));
  }

  handleEnter = e => (e.key === 'Enter') ? this.search() : ""

  render() {
    return (
      <Fragment>
        <div className="text-center my-3">
          <div className="h4">Searching Anime Title</div>
          <input onKeyDown={this.handleEnter} type="text" name="input" id="input" placeholder="search here" />
          <button onClick={this.search} className="btn-danger mx-2" type="submit">search</button>
        </div>
        <div className="d-flex flex-wrap text-center justify-content-center">
          {
            this.state.loading ? <Loading /> : this.state.result.map(dataItem => {
              return <ResultSearch key={dataItem.key} data={dataItem} />
            })
          }
        </div>
      </Fragment>
    )
  }
}

export default BodyHome;