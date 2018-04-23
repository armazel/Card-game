import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from 'material-ui/styles/colorManipulator';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});


class TableContentBlock extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount, style, data, classes } = this.props;
        //debugger;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Cost $</TableCell>
                            <TableCell >email</TableCell>
                            <TableCell >text</TableCell>
                            <TableCell>ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.name}>
                                    <TableCell>{n.name}</TableCell>
                                    <TableCell>{n.amountCount}</TableCell>
                                    <TableCell>{n.email}</TableCell>
                                    <TableCell>{n.text}</TableCell>
                                    <TableCell>{n.id}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(TableContentBlock);;