import React from 'react';
import useSWR from 'swr';

const API_URL = `https://api.github.com/search/repositories?q=user%3Aelectricmagnetic&sort=updated&order=desc`;
const CACHE_TIME = 24 * 60 * 60 * 1000;
const fetcher = async url => {
  const result = await fetch(url);

  if (!result.ok) {
    const error = new Error('An error occurred while fetching the data.');

    error.info = await result.json();
    error.status = result.status;
    throw error;
  }
  return result.json();
};

const Loader = () => (
  <div className="text-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading…</span>
    </div>
  </div>
);

const Error = () => (
  <div className="alert alert-danger" role="alert">
    Error loading projects
  </div>
);

const Repository = ({ repository }) => {
  return (
    <div className="Repository col-sm-6 col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            {repository.owner && <span className="owner text-muted">{repository.owner.login}</span>}
            <h3 className="h4">
              <a href={repository.html_url}>{repository.name}</a>
            </h3>
          </div>
          <div className="description mb-3">{repository.description}</div>
          <div className="details mb-3">
            {repository.language && (
              <span className="badge badge-secondary mr-1">{repository.language}</span>
            )}
            {repository.license && (
              <span className="badge badge-secondary mr-1">{repository.license.spdx_id}</span>
            )}
          </div>
          <div className="links">
            {repository.html_url && (
              <a href={repository.html_url} className="card-link">
                Repository
              </a>
            )}
            {repository.homepage && (
              <a href={repository.homepage} className="card-link">
                View
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Repositories = ({ repositories }) => {
  return (
    <div className="Repositories">
      <div className="row">
        {repositories.items.map(repository => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  );
};

const GitHub = () => {
  const { data, error, isValidating } = useSWR(`${API_URL}`, fetcher, {
    dedupingInterval: CACHE_TIME,
    revalidateOnFocus: false,
  });

  if (isValidating) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else if (data) {
    return <Repositories repositories={data} />;
  } else return null;
};

export default GitHub;
