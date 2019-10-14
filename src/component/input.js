
    import React from 'react';
    import clsx from 'clsx';
    import MenuItem from '@material-ui/core/MenuItem';
    import TextField from '@material-ui/core/TextField';
    
    import { makeStyles } from '@material-ui/core/styles';
    const useStyles = makeStyles(theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
    }));
    
    const currencies = [
      {
        value: 'USD',
        label: '$',
      },
      {
        value: 'EUR',
        label: '€',
      },
      {
        value: 'BTC',
        label: '฿',
      },
      {
        value: 'JPY',
        label: '¥',
      },
    ];
    export default function TextFields(props) {
      const classes = useStyles();
      return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label= {props.name}
            className={classes.textField}
            margin="normal"
            type = {props.name}
            name = {props.name}
            onChange = {(e)=>props.onchange(e)}
          />
          </form>
)



 }


