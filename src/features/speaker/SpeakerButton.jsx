import { Trans } from '@lingui/macro';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { fetchTTSAudio, isTTSAvailable } from './speakerApi';

const SpeakerButton = ({ text, language, classes }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSpeak = async () => {
    // Check if GiellaLT TTS supports this language
    if (isTTSAvailable(language)) {
      setIsLoading(true);
      const audioUrl = await fetchTTSAudio(text, language);
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
    }

    // Fallback to browser speech synthesis for other languages
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      const langMap = {
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

  return (
    <Tooltip title={<Trans>Listen to pronunciation</Trans>}>
      <IconButton
        className={classes?.icons}
        onClick={handleSpeak}
        disabled={isSpeaking || isLoading}
        size="small"
        aria-label="speak text"
      >
        {isLoading ? (
          <CircularProgress size={20} />
        ) : (
          <VolumeUpIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};

SpeakerButton.propTypes = {
  text: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    icons: PropTypes.string,
  }),
};

SpeakerButton.defaultProps = {
  classes: {},
};

export default SpeakerButton;
