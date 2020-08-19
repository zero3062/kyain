import React, {Component} from 'react';
import WorkItem from '../WorkItem/WorkItem';

class WorkList extends Component {
  render(){
    const {works} = this.props;
    const workItem = works.map(
      work => (
        <WorkItem
          key={work.id}
          title={work.title}
          text={work.text}
          img={work.img}
        />
      )
    );

    return(
      <div>
        {workItem}
      </div>
    );
  }
}

export default WorkList;
