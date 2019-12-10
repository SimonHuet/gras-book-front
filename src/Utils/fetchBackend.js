export default (baseUrl, path, options = {}) => {
  options = {
    ...options,
    ...getHeaders(options.headers),
  };

  return fetch(`${baseUrl}/${path}`, options)
    .then(response =>
      response.status < 400 && response.status !== 204
        ? resolveResponseAndBody(response)
        : Promise.reject(response)
    )
    .then(([response, body]) => ({
      status: response.status,
      headers: response.headers,
      body,
    }));
};

const getHeaders = optionsHeaders => {
  const token = localStorage.authToken;
  console.log(localStorage.authToken);

  return {
    headers: {
      ...optionsHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : null),
    },
  };
};

const resolveResponseAndBody = response => Promise.all([response, response.json()]);
