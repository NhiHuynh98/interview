import React, { memo, useMemo, useState, useEffect, Fragment } from 'react'
import _ from 'lodash'
import Date from '../../Date'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import SearchResult from '../../SearchResult'

function SearchForm ({ cb, list }) {
  const [date, setDate] = useState({
    startDate: '',
    closeDate: ''
  })

  const start = useMemo(() => {
    return `${date.startDate}`
  }, [date.startDate])

  const end = useMemo(() => {
    return `${date.closeDate}`
  }, [date.closeDate])

  useEffect(() => {
    if(!_.isEmpty(start) && !_.isEmpty(end)) {
      cb(start, end)
    }
  }, [start, end])

  return (
    <Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}}>
        <Col span={6}>
          <Date
            name='startDate'
            value={date.startDate}
            cb={(e) => setDate((prev) => ({ ...prev, startDate: e.value}) )}
          />
        </Col>
        <Col span={6}>
          <Date
            name='closeDate'
            value={date.closeDate}
            cb={(e) => setDate((prev) => ({ ...prev, closeDate: e.value}) )}
          />
        </Col>
        
      </Row>
      {
        !_.isEmpty(list) && 
          <SearchResult list={list} />
      }
    </Fragment>
  )
}

SearchForm.propTypes = {
  cb: PropTypes.func,
  list: PropTypes.object,
}

function shouldNotUpdate (prevProps, nextProps) {
  return _.isEqual(prevProps, nextProps)
}

export default memo(SearchForm, shouldNotUpdate)
