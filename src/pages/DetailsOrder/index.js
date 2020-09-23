import React, {useEffect, useState} from 'react';
import {Container} from './styles'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {format, parseISO} from 'date-fns'
import pt from 'date-fns/locale/pt';
import api from '../../services/api'

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});


function DetailsOrder() {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('USERID')
    const token = localStorage.getItem('TOKEN')
    async function data (){
      const dados = await api.get(`/api/users/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        }
      })
      setOrders(dados.data[0].orders)
      return dados
    }
    data ()
    
  },[]);

  console.log(orders)
  return (
    <Container>
       <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">Concluido</TableCell>
                <TableCell align="right">{
                format(parseISO(row.created_at),
                  "dd 'de' MMMM 'de' yyyy",
                  {locale:pt} 
                )
                }</TableCell>
                <TableCell align="right">{row.totalPrice}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default DetailsOrder