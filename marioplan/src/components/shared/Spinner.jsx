import React from 'react';

const Spinner = () => {
  return (
    <div className="preloader-wrapper big active" style={{ marginTop: '60px' }}>
      <div className="spinner-layer spinner-red-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
