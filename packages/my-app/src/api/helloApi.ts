export const postHello = async (message: string) => {
  const response = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
  return response.json();
}

export type SearchResponse = {
  hits: SearchHit[];
}

export type SearchHit = {
  id: string;
  message: string;
}
export const searchHello = async (query: string) => {
  const param = new URLSearchParams({
    query: query,
  }).toString()
  const response = await fetch(`/api/search/hello?${param}`);
  return response.json();
}
