import React, { useCallback, useEffect, useState } from 'react'
import { DatePicker } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import locale from 'antd/es/date-picker/locale/ja_JP'
import _ from 'lodash'

function Date ({ name, value, cb, dateFormat, placeHolder }) {
  const [date, setDate] = useState('')

  const hdChange = useCallback((date, dateString) => {
    cb({ name, value: dateString })
    setDate(date)
  }, [name, cb])

  useEffect(() => {
    if (!_.isEmpty(value)) {
      setDate(moment(value, dateFormat))
    } else {
      setDate(null)
    }
  }, [value])

  return (
    <div className='input-component'>
      <DatePicker
        style={{ width: '100%' }}
        locale={locale}
        format={dateFormat}
        onChange={hdChange}
        value={date}
        placeholder={placeHolder || 'YYYY-MM-DD'}
      />
    </div>
  )
}

Date.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  cb: PropTypes.func,
  dateFormat: PropTypes.string,
  placeHolder: PropTypes.string,
}

Date.defaultProps = {
  name: 'startDate',
  value: '',
  cb: () => { },
  dateFormat: 'YYYY-MM-DD',
  placeHolder: ''
}

export default Date
