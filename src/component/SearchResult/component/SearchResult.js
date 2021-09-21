import React, { Fragment } from 'react'
import _ from 'lodash'

export default function SearchResult({ list }) {
  return (
    <Fragment>
      <div>Asteroid name</div>
      {
        _.map(_.flatMapDeep(list.near_earth_objects), (item, index) => {
          return (
            <div key={index}>{item.name}</div>
          )
        })

      }
  </Fragment>
  )
}
