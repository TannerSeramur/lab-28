import React from 'react';
import AppBar from '@material-ui/core/AppBar';




const Message = (props) => {
  const styles = {
    textClass: {
      paddingTop: '90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    h3: {
      padding: '0px',
      margin: 0,
    },
    appBar: {
      textAlign: 'center',
    },
  };
  const { details: { name, prevName, count, text } } = props;

  return (
    <div>
      <AppBar style={styles.appBar}><h1>{text}</h1></AppBar>
      <div className='text' style={styles.textClass}>
        <h3 style={styles.h3}>Name: {name} </h3>
        <h3>Previous Name: {prevName} </h3>
        <div># of Updates: {count}</div>
      </div>
    </div>
  );
};

export default Message;
