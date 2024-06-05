import React from 'react';
import WorkItem from '@/components/ui/work-item';

const Work = () => {
  return (
    <div className="work work-container">
      <div className="work-title">
        <span className="work-title-main">portpolio</span>
        <span className="work-title-sub">Click To</span>
      </div>
      <div className="work-item work-item-container">
        {Array.from({ length: 10 }).map((_, i) => (
          <WorkItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default Work;
