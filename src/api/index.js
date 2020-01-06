import fetch from 'cross-fetch';

export const fetchParadigm = async (stem) => {
  const url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?json=true&text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.language}`;
  const response = await fetch(encodeURI(url), {credentials: 'same-origin', mode: 'no-cors'});
  const data = await response.json();
  return data;
};

export const getArticles = async (lemma) => {
  const url = `https://satni.uit.no/satnibackend/article/${lemma}`;
  const response = await fetch(encodeURI(url));
  const text = await response.text();

  return text;
};
