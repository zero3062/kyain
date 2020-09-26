import React from 'react';
import WorkItem from '../WorkItem/WorkItem';

const WorkList = ({ works }) => {
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

export default WorkList;
