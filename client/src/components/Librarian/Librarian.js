/* React */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* Styles */
import useStyles from './Librarian.styles';

const Librarian = (props) => {
  const classes = useStyles(props);

  const [results, setResults] = useState([]);
  const [isLoaded, setLoaded] = useState(false);




  useEffect(() => {
    axios.get('http://localhost:8080/getAllBranches').then(res => {
      setResults(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }, [])



  return (

    <div className={classes.root}>
      Librarian...
      <div>
        <ul>
          {results.map(result => (
            <li key={result.branchId}>
              {result.branchName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Librarian;
