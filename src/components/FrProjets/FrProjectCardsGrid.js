import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import tileData from '../../assets/linkJpg';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    /// gridList is the external size of the mosaic of cards
    width: 1000,
    height: 'auto',
    
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    /// centered the image
    transform: 'translateZ(0)',
  },
  titleBar: {
    /// shading of the black background of title
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const FrProjectCardsGrid = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList     /// full list grid
        //cellHeight='auto'
        //cellWidth={800}
        spacing={10}
        className={classes.gridList}
      >
        {tileData.map(tile => (
          <GridListTile       /// one single tile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 3 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="bottom"
              actionIcon={
                <IconButton className={classes.icon}>
                  <ShareIcon />
                </IconButton>
              }
              actionPosition="right"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

FrProjectCardsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrProjectCardsGrid);