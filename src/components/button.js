import { useState } from 'react';

const SubmitButton = ({ isLoading }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="submit"
        disabled={isLoading}
        className={`contact-form4-button thq-button-filled ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <span className="thq-body-small">
          {isLoading ? 'Generating Plan...' : 'Generate Plan'}
        </span>
      </button>
      
      {isLoading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default SubmitButton;