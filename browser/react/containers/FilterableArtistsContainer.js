import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import {connect} from 'react-redux'
import store from '../store';

class FilterableArtistsContainer extends React.Component {

  constructor(props) {

    super(props);
    this.state = Object.assign({
      inputValue: ''
    }, props.artists);

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.state = Object.assign({
      inputValue: ''
    }, this.props.artists);
  }

  componentWillUnmount() {
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.state.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

export default FilterableArtistsContainer;
