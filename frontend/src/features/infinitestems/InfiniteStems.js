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
  const {data, loading, error, loadMore, hasNextPage} = useStems('s')

  if (loading) return <Trans><p>Loading...</p></Trans>;
  if (error) return <Trans><p>Error {error.message}</p></Trans>;
  if (!data) return <Trans><p>Not found</p></Trans>;
  return (
    <>
      {data.stemList.edges.map(({node}, index) => <div key={index}>{node.stem}</div>)}
      <Button
        variant="contained"
        onClick={() => loadMore()}
      >
        Default
      </Button>
    </>
  )
}

export default InfiniteStems
