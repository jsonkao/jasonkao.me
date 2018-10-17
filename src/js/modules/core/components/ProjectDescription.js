import React from 'react';

const ProjectDescription = ({
  project: { imgPath, url, description },
  isVisible,
}) => {
  const output = [];
  if (imgPath) {
    output.push(
      <img
        key={url}
        src={imgPath}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
        }}
      />,
    );
  } else if (description) {
    output.push(
      <p
        key={url}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
        }}
      >
        {description}
      </p>,
    );
  }

  return output;
};

export default ProjectDescription;
