import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import CircularProgress from '@mui/material/CircularProgress';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import IconButton from '@mui/material/IconButton';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Tooltip from '@mui/material/Tooltip';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useState } from 'react';

import { fetchCachedTTSAudio } from './speakerService';

interface SpeakerButtonProps {
  text: string;
  language: string;
  classes?: {
    icons?: string;
  };
}

interface LangMap {
  [key: string]: string;
}

const SpeakerButton: React.FC<SpeakerButtonProps> = ({
  text,
  language,
  classes = {},
}) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSpeak = async () => {
    // Try GiellaLT TTS API first (with caching)
    setIsLoading(true);
    const audioUrl = await fetchCachedTTSAudio(text, language);
    setIsLoading(false);

    if (audioUrl) {
      // Play the MP3 from the API
      const audio = new Audio(audioUrl);

      audio.onplay = () => {
        setIsSpeaking(true);
      };

      audio.onended = () => {
        setIsSpeaking(false);
      };

      audio.onerror = () => {
        setIsSpeaking(false);
        console.error('Error playing audio');
      };

      audio.play();
      return;
    }

    // Fallback to browser speech synthesis for other languages
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      const langMap: LangMap = {
        fin: 'fi-FI',
        nob: 'nb-NO',
        swe: 'sv-SE',
        eng: 'en-US',
      };

      utterance.lang = langMap[language] || 'en-US';
      utterance.rate = 0.9;

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const isDisabled = isSpeaking || isLoading;

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Tooltip title={<Trans>Listen to pronunciation</Trans>}>
      <span>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <IconButton
          className={classes?.icons}
          onClick={handleSpeak}
          disabled={isDisabled}
          size="small"
          aria-label="speak text"
        >
          {isLoading ? (
            // @ts-ignore - Material-UI v4 compatibility
            <CircularProgress size={20} />
          ) : (
            // @ts-ignore - Material-UI v4 compatibility
            <VolumeUpIcon fontSize="small" />
          )}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default SpeakerButton;
