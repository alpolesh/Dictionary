import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AudioPlayer from 'react-h5-audio-player';
import Link from '@mui/material/Link';
import 'react-h5-audio-player/lib/styles.css';
import { Phonetic } from '../../types/dictionary';

function PhoneticCard(props: {phoneticsData: Phonetic}) {
  const { phoneticsData } = props;
  return (
    <Card variant="outlined" sx={{ marginBottom: 1 }}>
      <CardContent>
        <div className="results__phonetics">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {phoneticsData.text}
          </Typography>
          {phoneticsData.audio
            ? (
              <AudioPlayer
                src={phoneticsData.audio}
                showJumpControls={false}
                loop={false}
              />
            ) : ''}
          {phoneticsData.sourceUrl ? (
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <Link href={phoneticsData.sourceUrl} target="_blank">{phoneticsData.sourceUrl}</Link>
            </Typography>
          ) : ''}
          {phoneticsData.license ? (
            <>
              <Typography sx={{ fontSize: 16 }} gutterBottom>
                License:
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                <Link href={phoneticsData.license.url} target="_blank">{phoneticsData.license.name}</Link>
              </Typography>
            </>
          ) : ''}
        </div>
      </CardContent>
    </Card>
  );
}

export default PhoneticCard;
