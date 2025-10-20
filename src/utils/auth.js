// Prefer a Vite env var, fall back to the deployed backend domain
const baseUrl = import.meta.env.VITE_API_URL || "http://api.WTWR-dmend.ignorelist.com";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(
    new Error(`Error: ${res.status} ${res.statusText}`)
  );
};

export const signUp = ({ name, avatar, email, password }) => {
  console.log("Signing up with data:", { name, avatar, email, password });
  
 
  if (!email || !password) {
    console.error("Missing required fields:", { email: !!email, password: !!password });
    return Promise.reject(new Error("Email and password are required"));
  }
  
  
  const userData = { 
    name, 
    email, 
    password,
    avatar: avatar && avatar.trim() ? avatar : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop"
  };
  
  console.log("Sending to backend:", userData);
  
 
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    console.log("Signup response status:", res.status);
    return processServerResponse(res);
  });
};

export const signIn = ({ email, password }) => {

  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResponse);
};

export const checkToken = (token) => {

  return fetch(`${baseUrl}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  }).then(processServerResponse);
}; 