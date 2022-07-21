import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DictionaryItem } from '../../types/dictionary';
import MeaningsCard from '../MeaningsCard/MeaningsCard';

function Meanings(props: {wordData: DictionaryItem}) {
  const { wordData } = props;
  return (
    <Card variant="outlined" sx={{ marginBottom: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          Meanings
        </Typography>
        {wordData.meanings.map((meaningsData, index) => (
          <MeaningsCard meaningsData={meaningsData} key={index + meaningsData.synonyms[0]} />
        ))}
      </CardContent>
    </Card>
  );
}

export default Meanings;
