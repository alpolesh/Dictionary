import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DictionaryItem } from '../../types/dictionary';
import PhoneticsCard from '../PhoneticsCard/PhoneticsCard';

function Phonetics(props: {wordData: DictionaryItem}) {
  const { wordData } = props;
  return (
    <Card variant="outlined" sx={{ marginBottom: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          Phonetics
        </Typography>
        {wordData.phonetics.map((phoneticsData, index) => (
          <PhoneticsCard phoneticsData={phoneticsData} key={index + phoneticsData.text} />
        ))}
      </CardContent>
    </Card>
  );
}

export default Phonetics;
