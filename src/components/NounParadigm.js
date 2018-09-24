import React from 'react';
import { Div, Span, Table, Thead, Td, Tr, Th, Tbody } from 'glamorous';

const CaseRow = ({wcase, value}) => {
  if (value instanceof Array) {
    return (
      <Tr>
        <Td>{wcase.replace('_both', '')}</Td>
        <Td css={{colSpan: '2'}}>{value.map((word, i) => {
          return (<Div key={i}>{word}</Div>);
        })}</Td>
      </Tr>
    );
  }

  return (
    <Tr>
      <Td>{wcase}</Td>
      {Object.keys(value).map((key, j) => {
        return <Td key={j}>{value[key].map((word, i) => {
          return (<Div key={i}>{word}</Div>);
        })}</Td>;
      })}
    </Tr>
  );
};

const NounParadigm = ({paradigm}) => {
  return (
    <Table>
      <Thead>
        <Th>&nbsp;</Th><Th>Sg</Th><Th>Pl</Th>
      </Thead>
      <Tbody>
        {Object.keys(paradigm).map((p, i) => {
          return <CaseRow key={p} wcase={p} value={paradigm[p]} />;
        })}
      </Tbody>
    </Table>
  );
};

export default NounParadigm;
