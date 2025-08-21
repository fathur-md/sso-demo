export async function fetchUserData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fathur-md/sso-demo/main/public/users.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function fetchLoginData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fathur-md/sso-demo/main/public/loginData.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch news data");
  }
  return response.json();
}

export async function fetchMenuApp() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fathur-md/sso-demo/main/public/menuApp.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch menu data");
  }
  return response.json();
}
