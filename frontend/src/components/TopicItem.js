import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TopicItem extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#00f7ff'}}>
                <h4 style={{color: '#1768ff'}}>{this.props.topic.title}</h4>
            </div>
        )
    }
}

TopicItem.propTypes={
    topic: PropTypes.object.isRequired
  }

export default TopicItem
