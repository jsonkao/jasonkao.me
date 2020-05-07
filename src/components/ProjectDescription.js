import React from 'react';

const ProjectDescription = ({
  project: { imgPath, url, title, description },
  isVisible,
}) => {
  const isBlock = isVisible && description;
  const visibility = isVisible ? 'visible' : 'hidden';
  const output = [];
  if (imgPath) {
    output.push(
      <img
        key={url + '-img'}
        alt={title}
        src={require(`../media/${imgPath}`)}
        style={{
          visibility,
          position: isBlock && 'relative',
          width: isBlock && '100%',
        }}
      />,
    );
  }
  if (description) {
    output.push(
      <p
        key={url + '-p'}
        style={{
          visibility,
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
