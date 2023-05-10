import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    {
        field: 'nickname',
        headerName: 'Nickname',
        width: 150,
        editable: true,
    },
    {
        field: 'totalPoints',
        headerName: 'Fantasy Points',
        width: 150,
        editable: true,
    },

];




export default function DataGridDemo() {
    const [rows, setRows] = React.useState([])
    React.useEffect(() => {
        axios.get("http://localhost:3001/user/leaderboardGameWeek")
            .then((res) => {

                setRows(res.data.Gameweek)

            })


    }, [])
    console.log(rows)

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}