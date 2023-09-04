import React from 'react';
import { useMyContext } from '../data/MyContext';
import {
    Typography,
    Table,
    Toolbar,
    Tooltip,
    IconButton,
    TableHead,
    TableRow,
    TableCell,
    TableBody, TableContainer, Paper, TablePagination
} from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';

export interface MyComponentProps {
    openModal: (value: boolean) => void;
}

const MyTable = (props: MyComponentProps ) => {

    const data = useMyContext();
    const { openModal } = props;

    function EnhancedTableToolbar() {
        return (
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                }}
            >
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    My Table
                </Typography>

                <Tooltip title="Click me!">
                    <IconButton
                        onClick={() => {
                        openModal(true)
                    }}>
                        <CoffeeIcon />
                    </IconButton>
                </Tooltip>

            </Toolbar>
        );
    }

    return (
        <div>
            <h1>My Component</h1>
            <Typography sx={{marginBottom: '25px'}}>Found: {data?.total_items} records.</Typography>

            <TableContainer component={Paper}>
            <EnhancedTableToolbar />
            <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}} align={'right'}>ID</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data?._embedded._entries.map((dataItem) => (
                    <TableRow
                        key={dataItem.systemId.identifikatorverdi}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{dataItem.navn}</TableCell>
                        <TableCell align={'right'}>{dataItem.systemId.identifikatorverdi}</TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={100}
                rowsPerPage={10}
                page={1}
                onPageChange={() => {
                    console.log("clicked page change")
                }}
                onRowsPerPageChange={() => {
                    console.log("change rows per page")
                }}
            />
        </div>
    );
};

export default MyTable;
