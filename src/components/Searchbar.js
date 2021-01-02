import React, { useEffect, useState } from 'react';
import '../../node_modules/bulma/css/bulma.css';
import Axios from 'axios';

const Searchbar = ({ text, setText, response, setResponse }) => {
  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: text,
        },
      });
      if (data) {
        setResponse(data.query.search);
      }
      console.log(data);
    };

    const timeoutId = setTimeout(() => {
      if (text) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="container">
      <div className="form">
        <div className="container">
          <div className="field">
            <div className="control">
              <input
                className="input"
                placeholder="Seach for.."
                onChange={(e) => setText(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
