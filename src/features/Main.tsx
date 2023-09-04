import React, { useState } from 'react';
import {Typography, Button, Box} from '@mui/material';
import MyTable from './MyTable';
import MyModal from "./MyModal";

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
            <div style={{ width: '600px' }}>
                <div style={{ border: '2px dashed', padding: '20px' }}>
                    <Typography variant="h6">Template by Jennifer</Typography>
                    <Typography sx={{ lineHeight: 2 }}>
                        Here is a very basic template to get started with. The template is based on
                        being a podlet, and uses context api.
                    </Typography>
                    <Typography sx={{ lineHeight: 2 }}>
                        I used mui but I want to add some joy, just for the fun of it :)
                    </Typography>
                </div>
                <div>
                    <MyModal
                        isOpen={isModalOpen}
                        handleClose={closeModal}
                    />
                    <MyTable
                        openModal={setIsModalOpen}
                    />
                </div>
            </div>
        </Box>
    );
};

export default Main;
