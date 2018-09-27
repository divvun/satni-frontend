import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const VerbParadigm = ({paradigm}) => {
  return (
    <Table>
      <TableHead>
        <TableCell /><TableCell>Present</TableCell><TableCell>Prs ConNeg</TableCell><TableCell>Perfectum</TableCell><TableCell>PrfPrc</TableCell><TableCell>Prt ConNeg</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>mun</TableCell><TableCell>váccán</TableCell><TableCell>(in) vácce</TableCell><TableCell>vázzen</TableCell><TableCell>(lean) vázzán</TableCell><TableCell>(in) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>don</TableCell><TableCell>váccát</TableCell><TableCell>(it) vácce</TableCell><TableCell>vázzet</TableCell><TableCell>(leat) vázzán</TableCell><TableCell>(it) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>son</TableCell><TableCell>vázzá</TableCell><TableCell>(ii) vácce</TableCell><TableCell>váccii</TableCell><TableCell>(lea) vázzán</TableCell><TableCell>(ii) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>moai</TableCell><TableCell>vázze</TableCell><TableCell>(ean) vácce</TableCell><TableCell>vácciime</TableCell><TableCell>(ledne) vázzán</TableCell><TableCell>(ean) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>doai</TableCell><TableCell>vázzibeahtti</TableCell><TableCell>(eahppi) vácce</TableCell><TableCell>vácciide</TableCell><TableCell>(leahppi) vázzán</TableCell><TableCell>(eahppi) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>soai</TableCell><TableCell>vázziba</TableCell><TableCell>(eaba) vácce</TableCell><TableCell>vácciiga</TableCell><TableCell>(leaba) vázzán</TableCell><TableCell>(eaba) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>mii</TableCell><TableCell>vázzit</TableCell><TableCell>(eat) vácce</TableCell><TableCell>vácciimet</TableCell><TableCell>(leat) vázzán</TableCell><TableCell>(leat) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>dii</TableCell><TableCell>vázzibehtet</TableCell><TableCell>(ehpet) vácce</TableCell><TableCell>vácciidet</TableCell><TableCell>(lehpet) vázzán</TableCell><TableCell>(ehpet) vázzán</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>sii</TableCell><TableCell>vázzet</TableCell><TableCell>(eai) vácce</TableCell><TableCell>vázze</TableCell><TableCell>(leat) vázzán</TableCell><TableCell>(eat) vázzán</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default VerbParadigm;
