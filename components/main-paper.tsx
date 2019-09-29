import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Item } from '../src/items/interfaces/item';
import Link from 'next/link';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       padding: theme.spacing(3, 2),
//     },
//   }),
// );

interface IProps {
  item: Item;
}

export default function PaperSheet(props: IProps) {
  // const classes = useStyles();

  return (
    <div style={{ margin: '10px 0' }}>
      <Paper style={{ padding: '10px' }}>
        <Typography variant='h5' component='h3'>
          <Link scroll={false} href={'/i/[singleitem]'} as={`/i/${props.item._id}`}>
            <a
              style={{ textDecoration: 'underline', color: 'black' }}
              href={`/i/${props.item._id}`}
            >
              {props.item.name}
            </a>
          </Link>
        </Typography>

        <Typography component='p'>
          {props.item.description}
        </Typography>

        <Typography component='span' style={{ color: 'blue'}}>
          Quantity - {props.item.qty}
        </Typography>
      </Paper>
    </div>
  );
}
