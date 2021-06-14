import React from 'react';
import {usePagination} from '@material-ui/lab/Pagination';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    },
});
type PropsPaginator = {
    cardPacksTotalCount: number
    cardPage: number
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function UsePagination(props: PropsPaginator) {
    const classes = useStyles();
    const { items } = usePagination({
        count: Math.ceil(props.cardPacksTotalCount/10),
        page: props.cardPage,
        onChange: props.onChange
    });

    return (
        <nav>
            <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                                {page}
                            </button>
                        );
                    } else {
                        children = (
                            <button type="button" {...item}>
                                {type}
                            </button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </ul>
        </nav>
    );
}



