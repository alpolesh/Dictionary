import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import shortid from 'shortid';
import Link from '@mui/material/Link';
import { DictionaryItem } from '../../types/dictionary';
import 'react-h5-audio-player/lib/styles.css';
import PhoneticsCard from '../PhoneticsCard/PhoneticsCard';
import MeaningsCard from '../MeaningsCard/MeaningsCard';

function WordCard(props: {wordData: DictionaryItem}) {
  const { wordData } = props;
  return (
    <div className="results__word-card">
      <Card sx={{ minWidth: 320 }}>
        <CardContent>
          <Typography variant="h3" component="div">
            {wordData.word}
          </Typography>
          <Card variant="outlined" sx={{ marginBottom: 1 }}>
            <CardContent>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                Phonetics
              </Typography>
              {wordData.phonetics.map((phoneticsData) => (
                <PhoneticsCard phoneticsData={phoneticsData} key={shortid.generate()} />
              ))}
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ marginBottom: 1 }}>
            <CardContent>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                Meanings
              </Typography>
              {wordData.meanings.map((meaningsData) => (
                <MeaningsCard meaningsData={meaningsData} key={shortid.generate()} />
              ))}
            </CardContent>
          </Card>
          <Typography sx={{ fontSize: 16 }} gutterBottom>
            License:
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <Link href={wordData.license.url} target="_blank">{wordData.license.name}</Link>
          </Typography>
          {wordData.sourceUrls.map((url) => (
            <Typography sx={{ fontSize: 14 }} gutterBottom key={shortid.generate()}>
              <Link href={url} target="_blank">{url}</Link>
            </Typography>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default WordCard;
