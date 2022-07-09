import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import shortid from 'shortid';
import { Meaning } from '../../types/dictionary';
import DefinitionCard from '../App/Definition/Definition';

function MeaningsCard(props: {meaningsData: Meaning}) {
  const { meaningsData } = props;
  return (
    <Card variant="outlined" sx={{ marginBottom: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {meaningsData.partOfSpeech}
        </Typography>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          Definitions:
        </Typography>
        <Card variant="outlined" sx={{ marginBottom: 1 }}>
          <CardContent>
            {meaningsData.definitions.map((defenitionData) => (
              <DefinitionCard defenitionData={defenitionData} key={shortid.generate()} />
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default MeaningsCard;
