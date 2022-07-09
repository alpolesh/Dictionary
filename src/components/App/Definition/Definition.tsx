import React from 'react';
import Typography from '@mui/material/Typography';
import { Definition } from '../../../types/dictionary';

function DefinitionCard(props: {defenitionData: Definition}) {
  const { defenitionData } = props;
  return (
    <>
      <Typography sx={{ fontSize: 14, textAlign: 'justify' }} gutterBottom>
        {`- ${defenitionData.definition}`}
      </Typography>
      <Typography sx={{ fontSize: 14, textAlign: 'justify' }} gutterBottom>
        {defenitionData.synonyms.length ? `Synonyms: ${defenitionData.synonyms.join(', ')}.` : ''}
      </Typography>
      <Typography sx={{ fontSize: 14, textAlign: 'justify' }} gutterBottom>
        {defenitionData.antonyms.length ? `Antonyms: ${defenitionData.antonyms.join(', ')}.` : ''}
      </Typography>
      <Typography sx={{ fontSize: 14, textAlign: 'justify', borderBottom: 'solid 1px #D8D8D8' }} gutterBottom>
        {defenitionData.example ? `Example: ${defenitionData.example}.` : ''}
      </Typography>
    </>
  );
}

export default DefinitionCard;
