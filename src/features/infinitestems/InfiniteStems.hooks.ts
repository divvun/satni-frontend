import { useQuery } from "@apollo/client/react";
import { useLocation } from "react-router-dom";

import { GET_LANGS_DICTS, type GetLangsAndDictsQuery } from "../../operations/queries/getLangsDicts";
import { GET_LEMMAS, type  AllLemmasQuery } from "../../operations/queries/getLemmas";
import { GET_SEARCH_MODE, type  GetSearchModeQuery } from "../../operations/queries/getSearchMode";
import type { StemType } from "../../graphql/graphql";
import { locationParser } from "../../utils";

interface UseStemsResult {
  totalCount?: number;
  stems: StemType[];
  error?: any;
  hasNextPage?: boolean;
  loading: boolean;
  loadMore?: () => void;
}

function useStems(inputValue: string): UseStemsResult {
  const searchModeQueryResult = useQuery<GetSearchModeQuery>(GET_SEARCH_MODE);
  const { searchMode = "" } = searchModeQueryResult.data || {};
  const langsDictsQueryResult = useQuery<GetLangsAndDictsQuery>(
    GET_LANGS_DICTS
  );
  const { srcLangs = [], targetLangs = [] } = langsDictsQueryResult.data || {};

  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data?.wantedDicts || [];

  const { data, loading, fetchMore, error } = useQuery<AllLemmasQuery>(
    GET_LEMMAS,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        inputValue,
        searchMode,
        srcLangs,
        targetLangs,
        wantedDicts,
      },
    }
  );

  if (loading && !data) return { loading, stems: [] };
  if (error) return { error, stems: [], loading: false };

  const loadMore = () =>
    fetchMore({
      variables: {
        after: data?.stemList?.pageInfo?.endCursor,
      },
    });

  return {
    totalCount: data?.stemList?.totalCount ?? undefined,
    stems:
      data?.stemList?.edges
        ?.map((edge) => edge?.node)
        .filter((node): node is StemType => node != null) || [],
    error,
    hasNextPage: data?.stemList?.pageInfo?.hasNextPage,
    loading,
    loadMore,
  };
}

export default useStems;
