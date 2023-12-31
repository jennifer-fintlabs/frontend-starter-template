import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export interface MyModalProps {
    isOpen: boolean;
    handleClose: (value: string) => void;
}

export default function MyModal(props: MyModalProps) {

    const { isOpen, handleClose } = props;

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Coffee is Life
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        If you find anything in this template useful,
                        you owe me a cup of coffee :)
                    </Typography>
                    <Typography>~Jennifer~</Typography>
                </Box>
            </Modal>
        </div>
    );
}
