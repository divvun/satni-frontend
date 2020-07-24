import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import { useCookies } from 'react-cookie';

const GET_LEMMAS = gql`
  query AllLemmas($inputValue: String!, $wantedLangs: [String]!,
                  $wantedDicts: [String]!, $after: String ) {
      stemList(first:10,
               search: $inputValue,
               wanted: $wantedLangs,
               wantedDicts: $wantedDicts
               after: $after
             ) {
      edges {
        node {
          stem
          srclangs
          targetlangs
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

function useStems(inputValue) {
  const [cookies] = useCookies(['wantedLangs', 'wantedDicts']);

  const {data, loading, fetchMore, error} = useQuery(
    GET_LEMMAS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      inputValue,
      wantedLangs: cookies.wantedLangs,
      wantedDicts: cookies.wantedDicts,
    }
  });

  if (loading) return {loading};
  if (error) return {error}
  
  const loadMore = () => (
    fetchMore({
    variables: {
      after: data.stemList.pageInfo.endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      const newEdges = fetchMoreResult.stemList.edges;
      const pageInfo = fetchMoreResult.stemList.pageInfo;

      return newEdges.length
        ? {
            // Put the new comments at the end of the list and update `pageInfo`
            // so we have the new `endCursor` and `hasNextPage` values
            stemList: {
              __typename: previousResult.stemList.__typename,
              edges: [...previousResult.stemList.edges, ...newEdges],
              pageInfo
            }
          }
        : previousResult;
    }
    }))
      return {
        data,
        error,
        hasNextPage: data.stemList.pageInfo.hasNextPage,
        loading,
        loadMore,
      };
    }

export default useStems;
