import React from 'react';
import Tag from '../atoms/Tag';

function TagContainer(props) {
  const containerStyle = {
    margin: '16px 0'
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#898b8c',
    marginBottom: '8px'
  };

  const tagListStyle = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  const tags = props.tags.map( (tag) => {
    return (
      <Tag
        key={tag.id}
        id={tag.id}
        name={tag.name}
      />
    );
  });

  return (
    <div style={containerStyle}>
      <div style={labelStyle}>Tags:</div>
      <div style={tagListStyle}>{ tags }</div>
    </div>
  );
}

export default TagContainer;
