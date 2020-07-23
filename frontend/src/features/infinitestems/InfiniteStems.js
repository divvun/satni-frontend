import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import useStems from './InfiniteStems.hooks'
import { useCookies } from 'react-cookie';
import {gql} from 'apollo-boost';
import { Trans } from '@lingui/macro';
import Button from '@material-ui/core/Button';

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

const InfiniteStems = () => {
  const inputValue = 's'
  const [cookies] = useCookies(['wantedLangs', 'wantedDicts']);
  // const {stemList, loading, error, fetchMore} = useStems()
    const {data, loading, fetchMore, error} = useQuery(
      GET_LEMMAS, {
      notifyOnNetworkStatusChange: true,
      variables: {
        inputValue,
        wantedLangs: cookies.wantedLangs,
        wantedDicts: cookies.wantedDicts,
      }

    });

  if (loading) return <Trans><p>Loading...</p></Trans>;
  if (error) return <Trans><p>Error {error.message}</p></Trans>;
  if (!data) return <Trans><p>Not found</p></Trans>;
  return (
    <>
      {data.stemList.edges.map(({node}, index) => <div key={index}>{node.stem}</div>)}
      <Button
      variant="contained"
      onClick={() =>
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
  })
}>Default</Button>
</>
  )
}

export default InfiniteStems
