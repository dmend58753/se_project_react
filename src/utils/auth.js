const baseUrl = "http://localhost:3001";

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
  
  // Check for required fields
  if (!email || !password) {
    console.error("Missing required fields:", { email: !!email, password: !!password });
    return Promise.reject(new Error("Email and password are required"));
  }
  
  // Don't send empty avatar to avoid validation error
  const userData = { name, email, password };
  if (avatar && avatar.trim()) {
    userData.avatar = avatar;
  }
  
  // Mock signup - just add user to users array
  return fetch(`${baseUrl}/users`, {
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
  // Mock signin - find user by email and return mock token
  return fetch(`${baseUrl}/users`)
    .then(processServerResponse)
    .then((users) => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        // Return mock token response using _id (JSON server uses _id)
        return { token: `mock-token-${user._id}`, user };
      } else {
        throw new Error("Invalid email or password");
      }
    });
};

export const checkToken = (token) => {
  // Mock token validation - extract user ID from token
  const userId = token.replace('mock-token-', '');
  return fetch(`${baseUrl}/users/${userId}`)
    .then(processServerResponse);
}; 