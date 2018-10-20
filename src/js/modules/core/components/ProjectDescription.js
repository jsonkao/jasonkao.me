import React from 'react';

const ProjectDescription = ({
  project: { imgPath, url, description },
  isVisible,
}) => {
  const isBlock = isVisible && description;
  const output = [];
  if (imgPath) {
    output.push(
      <img
        key={url}
        src={imgPath}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
          position: isBlock && 'relative',
          width: isBlock && '100%',
        }}
      />,
    );
  }
  if (description) {
    output.push(
      <p
        key={url}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
          marginTop: '0.4em',
        }}
      >
        {description}
      </p>,
    );
  }

  return output;
};

export default ProjectDescription;
