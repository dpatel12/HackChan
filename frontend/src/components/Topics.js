import React, { Component } from 'react';
import TopicItem from './TopicItem';
import PropTypes from 'prop-types';
class Topics extends Component{
  render(){
    return this.props.topics.map((topic)=>(
      <TopicItem key={topic.id} topic={topic}/>
    ));
  }
}


export default Topics;
