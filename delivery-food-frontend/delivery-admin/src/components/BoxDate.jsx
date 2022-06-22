import React from 'react';

const styledBox = {
  height: '120px',
  width: '200px',
  margin: '0 auto',
  padding: '10px',
  borderRadius: '5px',
  background: 'white',
  boxShadow: '8px 7px 20px', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function BoxDate({title, data}) {
  return (
    <>
      <div style={styledBox}>
        <h4 style={{color: '#b8c0c9'}}>
          {title}
        </h4>
        <p style={{ fontSize: '2em',}}>{data}</p>
      </div>
    </>
  )
}
