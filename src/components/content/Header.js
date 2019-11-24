import React from 'react';
import {fetchBucket} from '../../actions'
import {connect} from 'react-redux'

class HeaderContent extends React.Component{

	componentDidMount(){
		this.props.fetchBucket(this.props.bucketId)
	}

	render(){	
		if(!this.props.bucketName || this.props.bucketId==undefined)
			return <div style={{color:"white",fontSize:"large"}}>Select a bucket to add or view todos</div>;
		return(
			<div style={{color:"white",fontSize:"large"}}>{this.props.bucketName.category}</div>	
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	return {bucketName:state.buckets[ownProps.bucketId]}
}

export default connect(mapStateToProps,{fetchBucket})(HeaderContent);
