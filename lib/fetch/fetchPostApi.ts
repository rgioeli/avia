export const fetchPostApi = async (
  url: string,
  signal: AbortController,
  body: object
) => {
  const request = await fetch(url, {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(body),
    signal: signal.signal,
  });

  return request;
};
