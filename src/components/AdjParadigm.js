import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const AdjParadigm = ({paradigm}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>&nbsp;</TableCell>
          <TableCell colSpan={2}>Uff</TableCell>
          <TableCell colSpan={2}>Comp</TableCell>
          <TableCell colSpan={2}>Superl</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><span>Attr</span></TableCell>
          <TableCell colSpan={2}>litna</TableCell>
          <TableCell colSpan={2}><div>litnásut</div><div>litnásit</div><div>litnáset</div><div>litnásat</div></TableCell>
          <TableCell colSpan={2}><div>litnáseamos</div><div>litnásamos</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>Sg</TableCell>
          <TableCell>Pl</TableCell>
          <TableCell>Sg</TableCell>
          <TableCell>Pl</TableCell>
          <TableCell>Sg</TableCell>
          <TableCell>Pl</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span>Nom</span></TableCell>
          <TableCell>
            <div>linis</div>
          </TableCell>
          <TableCell>
            <div>litnásat</div>
          </TableCell>

          <TableCell>
            <div>litnásut</div><div>
          litnásit</div><div>
          litnáset</div><div>
          litnáseabbo</div><div>
          litnásat</div><div>
          litnásabbo
        </div>
          </TableCell>
          <TableCell>
            <div>
              litnáseappot</div><div>
              litnásabbot
            </div>
          </TableCell>
          <TableCell>
            <div>
          litnáseamos</div><div>
          litnásamos
          </div>
          </TableCell>
          <TableCell>
            <div>
              litnásepmosat</div><div>
              litnásamosat
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AdjParadigm;
