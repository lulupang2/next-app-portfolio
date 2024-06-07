import React from 'react';
import WorkCard from '@/components/ui/work-card';
import WORKLISTS from '@/lib/worklist';
import Modal from '../ui/modal';
import WorkModal from '../ui/work-modal';

const Work = () => {
  const [selectedWork, setSelectedWork] =
    React.useState<WorkDataProps | null>(null);

  const openModal = React.useCallback(
    (el: WorkDataProps) => setSelectedWork(el),
    []
  );
  const closeModal = React.useCallback(
    () => setSelectedWork(null),
    []
  );
  return (
    <section className="work work-container">
      <div className="work-title">
        <span className="work-title-main">portpolio</span>
        <span className="work-title-sub">Click To</span>
      </div>
      <div className="work-item work-item-container">
        {WORKLISTS.map((data, i) => (
          <WorkCard
            key={i}
            {...data}
            onClick={() => openModal(data)}
          />
        ))}
      </div>
      <Modal show={!!selectedWork} onClose={closeModal}>
        <WorkModal {...selectedWork} />
      </Modal>
    </section>
  );
};

export default Work;
