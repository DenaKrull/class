import React from 'react'
import PropTypes from 'prop-types'


export default function ZipChooser(props) {

  const{zip, zipChanged} = props;
  return (
   
      <form className="row row-cols-lg-auto g-3 align-items-center flex-row-reverse">
        <div className="col-12">
          <input type="text" className="form-control" id="zip" placeholder="enter your zip" valie={zip} onChange={zipChanged}></input>
        </div>
      </form>
  
  )
}

ZipChooser.propTypes = {
  zip: PropTypes.string.isRequired,
  zipChanged: PropTypes.func.isRequired
}
