import { targetLangsVar } from "../../apolloCache";
import apolloClient from "../../apolloClient";
import { GET_LEMMAS } from "../queries/getLemmas";
import { GET_TERM_ARTICLES } from "../queries/getTermArticles";
import { GET_DICT_ARTICLES } from "../queries/getDictArticles";

const setTargetLangs = (langs: string[]): void => {
  localStorage.setItem("targetLangs", JSON.stringify(langs));
  targetLangsVar(langs);

  // Refetch queries that depend on targetLangs
  apolloClient.refetchQueries({
    include: [GET_LEMMAS, GET_TERM_ARTICLES, GET_DICT_ARTICLES],
  });
};

export default setTargetLangs;
