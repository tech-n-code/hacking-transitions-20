import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: 'hidden',
        height: '429px',
      }}
    >
      <div
        style={{
          height: '150%',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.overflow = 'scroll';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.overflow = 'hidden';
        }}
      >
        {props.children}
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0px;
          }

        `}
      </style>
    </div>
  );
};

export default Scroll;