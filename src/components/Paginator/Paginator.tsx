import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Pagination} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

type BasicPaginationPropsType = {
    cardPacksTotalCount: number
    page: number
    onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export function BasicPagination(props: BasicPaginationPropsType) {
    const classes = useStyles();
    const count = Math.ceil(props.cardPacksTotalCount/10)

    return (
        <div className={classes.root}>
            <Pagination count={count}
                        color="secondary"
                        page={props.page}
                        onChange={props.onChange}
            />
        </div>
    );
}



