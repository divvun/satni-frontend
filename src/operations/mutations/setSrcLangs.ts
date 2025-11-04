import { srcLangsVar } from "../../apolloCache";
import apolloClient from "../../apolloClient";
import { GET_LEMMAS } from "../queries/getLemmas";
import { GET_TERM_ARTICLES } from "../queries/getTermArticles";
import { GET_DICT_ARTICLES } from "../queries/getDictArticles";

const setSrcLangs = (langs: string[]): void => {
  localStorage.setItem("srcLangs", JSON.stringify(langs));
  srcLangsVar(langs);

  // Refetch queries that depend on srcLangs
  apolloClient.refetchQueries({
    include: [GET_LEMMAS, GET_TERM_ARTICLES, GET_DICT_ARTICLES],
  });
};

export default setSrcLangs;
