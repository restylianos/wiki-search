import '../../node_modules/bulma/css/bulma.css';
import React from 'react';

const ListViewer = ({ response, text }) => {
  const renderedResults = response.map((item) => {
    return (
      <div className="column is-one-quarter" key={item.pageid}>
        <div className="card">
          <div className="card-header-title">{item.title}</div>
          <div className="card-content">
            <div className="content">{item.snippet.replace(/(<([^>]+)>)/gi, '')}</div>
          </div>
          <footer className="card-footer">
            <button className="button is-link container" aria-haspopup>
              <a
                href={`https://en.wikipedia.org?curid=${item.pageid}`}
                style={{ color: 'white' }}
                target="_blank"
              >
                Link
              </a>
            </button>
          </footer>
        </div>
      </div>
    );
  });

  return <div className="columns is-multiline">{renderedResults}</div>;
};

export default ListViewer;
