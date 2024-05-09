import { useState } from 'react';
import Textarea from './Textarea';
import Stats from './Stats';
import { INSTAGRAM_MAX_CHARACTERS , TWITTER_MAX_CHARACTERS } from '../lib/constants';

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s/).filter(word=>word!=="").length,
    instagramCharacterLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    twitterCharacterLeft: TWITTER_MAX_CHARACTERS - text.length,
  };

  return (
  <main className='container'>
    <Textarea text={text} setText={setText}/>
    <Stats stats={stats} />
  </main>
  );
}
