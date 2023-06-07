import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <Stack sx={{ display: "flex", justifyContent: "center", mt: 10 }} spacing={2} direction="row">
            <CircularProgress color="primary" />
        </Stack>
    );
}

export default Loader