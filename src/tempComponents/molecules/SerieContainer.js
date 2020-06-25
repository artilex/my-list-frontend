import React from 'react';
import Serie from '../atoms/Serie';

function SerieContainer(props) {
  const containerStyle = {
    margin: '16px 0'
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#898b8c',
    marginBottom: '8px'
  };

  const series = props.series.map( (serie) => {
    return (
      <Serie
        key={serie.id}
        id={serie.id}
        name={serie.name}
        orderNumber={serie.orderNumber}
      />
    );
  });

  return (
    <div style={containerStyle}>
      <div style={labelStyle}>Series:</div>
      { series }
    </div>
  );
}

export default SerieContainer;
