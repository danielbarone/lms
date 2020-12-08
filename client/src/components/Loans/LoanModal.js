import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loanActions } from '../../services/actions';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    toggleModal: {
        ...theme.buttons.custom('filled', 'PURPLE'),
        height: 30,
        margin: '12px 4px',
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const LoanModal = (props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [bookId, setBookId] = useState(0);
    const [branchId, setBranchId] = useState(0);
    const [cardNo, setCardNo] = useState(0);



    const override = (bookId, branchId, cardNo, newDueDate) => dispatch(loanActions.overrideLoan(bookId, branchId, cardNo, newDueDate))
    const dispatch = useDispatch();


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    const handleSubmit = () => {


        let numWeeks = 2;

        var currentDate = new Date();

        var newDate = currentDate;
        newDate.setDate(newDate.getDate() + numWeeks * 7)

        var parsedNewDate = `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`

        override(bookId, branchId, cardNo, parsedNewDate);

        handleClose();
        props.setRefresher(props.refresher + 1)
        // window.location.reload()

    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Overwrite Due Date</h2>
            <p id="simple-modal-description">
                Please enter the Id values of the loan you would like to update. The new date will be two weeks from today.
            </p>
            <TextField
                id="filled-number"
                label="Book Id"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                onChange={(e) => setBookId(e.target.value)}
            />
            <TextField
                style={{ 'marginTop': '5px' }}
                id="filled-number"
                label="Branch Id"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                onChange={(e) => setBranchId(e.target.value)}
            />
            <TextField
                style={{ 'marginTop': '5px' }}
                id="filled-number"
                label="Card No"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                onChange={(e) => setCardNo(e.target.value)}
            />
            <Button onClick={handleSubmit} className={classes.toggleModal}>Override Due Date</Button>
        </div>
    );

    return (
        <div>
            <Button onClick={handleOpen} className={classes.toggleModal}>Override Due Date</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>

        </div>
    );
}

export default LoanModal;
