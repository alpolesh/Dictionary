import React from 'react';

function NotFound(props: {errorMessage: string | null}) {
  const { errorMessage } = props;
  return (
    <div className="not-found">
      <p className="not-found__description">{errorMessage}</p>
    </div>
  );
}

export default NotFound;
