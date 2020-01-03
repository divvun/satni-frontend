import fetch from 'cross-fetch';

export async function fetchParadigm (stem) {
  const url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?json=true&text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.language}`;
  const response = await fetch(encodeURI(url), {credentials: 'same-origin', mode: 'no-cors'});
  const data = await response.json();
  return data;
}
