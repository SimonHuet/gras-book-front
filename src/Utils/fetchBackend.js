export default (baseUrl, path, options = {}) => {
  options = {
    ...options,
    ...getHeaders(options.headers),
  };

  return fetch(`${baseUrl}/${path}`, options)
    .then(response =>
      response.status < 400 ? resolveResponseAndBody(response) : Promise.reject(response)
    )
    .then(([response, body]) => ({
      status: response.status,
      headers: response.headers,
      body,
    }));
};

const getHeaders = optionsHeaders => {
    const token = localStorage.authToken; 

  return {
    headers: {
      ...optionsHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : null),
    },
  };
};

const resolveResponseAndBody = response => Promise.all([response, response.json()]);
/*
  response.headers.get('Content-Type') === 'application/json'
    ? Promise.all([response, response.json()])
    : Promise.all([response, response.text()]); */
