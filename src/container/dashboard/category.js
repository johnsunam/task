import React, {Component} from 'react';
import { connect } from 'react-redux'

class Category extends Component {
    componentDidMount() {
        
    }
    render () {
        return (<div>single Category</div>)
    }
}

export default connect()(Category);