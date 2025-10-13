
const baseUrl = process.env.NODE_ENV === "production"
  ? "https://api.WTWR-dmend.ignorelist.com"
  : "http://localhost:3001";



export function addItem({ name, imageUrl, weather }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Error adding item: ${res.status} ${res.statusText}`)
    );
  });
}

export function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Error fetching items: ${res.status} ${res.statusText}`)
    );
  });
}

export function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Error deleting item: ${res.status} ${res.statusText}`)
    );
  });
}
