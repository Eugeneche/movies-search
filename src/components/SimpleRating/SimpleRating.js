import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


export default function SimpleRating(props) {
  /* const [value, setValue] = React.useState(1); */

  const useStyles = makeStyles({
    root: {      
    },
    iconEmpty: {
      color: '#494949b6',
    },
    sizeSmall: {
      '@media screen and (max-width: 768px)': {
        fontSize: '0.85rem',
      }
      
    },
  });
  const classes = useStyles();
  

  return (    
    <div>
      <Box 
        component="fieldset" 
        mb={1} 
        borderColor="transparent" 
        padding="0 3%"
        position="absolute"
        bottom="0"
         >
        <Rating 
          name="read-only" 
          max={10}
          value={props.value} 
          precision={0.1}
          classes={{ root: classes.root,
                     iconEmpty: classes.iconEmpty,
                     sizeSmall: classes.sizeSmall}}
          size="small"
          readOnly />
      </Box>
    </div>
  );
}
