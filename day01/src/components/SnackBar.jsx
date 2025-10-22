
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';

export default function AutohideSnackbar({ text, tryOpen, severity }) {
    const [open, setOpen] = useState(false);

    /*const handleClick = () => {
        setOpen(true);
    };*/

    useEffect(() => {
        setOpen(tryOpen);
    }, [tryOpen])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                   {text}
                </Alert>
            </Snackbar>
        </div>
    );
}
