import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { DictionaryItem } from '../../types/dictionary';
import 'react-h5-audio-player/lib/styles.css';
import Phonetics from '../Phonetics/Phonetics';
import Meanings from '../Meanings/Meanings';

function WordCard(props: {wordData: DictionaryItem}) {
  const { wordData } = props;
  return (
    <div className="results__word-card">
      <Card sx={{ minWidth: 320 }}>
        <CardContent>
          <Typography variant="h3" component="div">
            {wordData.word}
          </Typography>
          <Phonetics wordData={wordData} />
          <Meanings wordData={wordData} />
          <Typography sx={{ fontSize: 16 }} gutterBottom>
            License:
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <Link href={wordData.license.url} target="_blank">{wordData.license.name}</Link>
          </Typography>
          {wordData.sourceUrls.map((url) => (
            <Typography sx={{ fontSize: 14 }} gutterBottom key={url}>
              <Link href={url} target="_blank">{url}</Link>
            </Typography>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default WordCard;
