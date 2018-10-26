import React from "react";
import "./List.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';






const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class OthMsclCheckboxList extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
    <div className={classes.root}>
      <List>
      <h4>Other Muscles</h4>
          
      {["Cardio", "Olympic Weight Lifting", "Powerlifting", "Strength", "Stretching"].map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense={true}
              button
              onClick={this.handleToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={value} />
              <ListItemSecondaryAction>
                
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          
        </List>
    </div>
   );
}
}

OthMsclCheckboxList.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OthMsclCheckboxList);
