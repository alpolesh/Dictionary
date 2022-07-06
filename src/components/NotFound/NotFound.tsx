import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function NotFound(props: {errorMessage: string | null}) {
  const { errorMessage } = props;
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <p className="not-found__description">{errorMessage}</p>
      <Button className="not-found__button" variant="contained" onClick={() => navigate('/')}>Back</Button>
    </div>
  );
}

export default NotFound;
