import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../component/SearchForm'
import _ from 'lodash'
import api from '../../../helper/api'
import { Error } from '../../../helper/alert'
const API_KEY = 'DEMO_KEY'

class SearchFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: {}
    }
  }
  hdSearch = (start, end) => {
    api(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${API_KEY}`, 'GET')
      .then(res => {
        if(res?.code === 400) return Error(res.error_message)
        this.setState({ list: res })
      })
  }
  render() {
    const { list } = this.state
    return (
      <SearchForm list={list} cb={(start, end) => this.hdSearch( start, end)}  />
    )
  }
}

SearchFormContainer.propTypes = {
  cb: PropTypes.func
}

SearchFormContainer.defaultProps = {
  cb: () => {}
}

export default SearchFormContainer

