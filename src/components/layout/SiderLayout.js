import React from 'react';
import {connect} from 'react-redux';
import {fetchBuckets} from '../../actions'
import FormModal from './formModal'
import {Link} from 'react-router-dom'

class SiderLayout extends React.Component {

  componentDidMount(){
      this.props.fetchBuckets()
  }


  renderBuckets(){
      return this.props.buckets.map(bucket=>{
        return(
            <Link to={`/bucket/${bucket.id}`} className="item" key={bucket.id}>
                {bucket.category}
            </Link>
        )
      })
  }
  
  render() {
    return(
        <div>
          <FormModal/>
          <div className="ui buttons vertical pointing menu">
              {this.renderBuckets()}
          </div>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
  return {buckets:Object.values(state.buckets)}
}

export default connect(mapStateToProps,{fetchBuckets})(SiderLayout);