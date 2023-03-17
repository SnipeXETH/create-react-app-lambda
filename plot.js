import React, { useState } from 'react';
import './Plot.css';

const Plot = ({ plotData, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [story, setStory] = useState(plotData.story);

  const handleEdit = () => {
    if (isOwner) {
      setEditing(!editing);
    }
  };

  const handleSave = () => {
    // Save the updated story to the backend.
    // Update the story in the parent component or context.
    setEditing(false);
  };

  const renderStory = () => {
    return editing ? (
      <textarea value={story} onChange={(e) => setStory(e.target.value)} />
    ) : (
      <p>{story}</p>
    );
  };

  return (
    <div className="plot">
      <h2>{plotData.title}</h2>
      {renderStory()}
      {isOwner && (
        <button onClick={editing ? handleSave : handleEdit}>
          {editing ? 'Save' : 'Edit'}
        </button>
      )}
    </div>
  );
};

export default Plot;
