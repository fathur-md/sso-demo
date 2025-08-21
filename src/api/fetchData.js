export async function fetchUserData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fathur-md/sso-demo/main/public/user.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function fetchNewsData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fathur-md/sso-demo/main/public/news.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch news data");
  }
  return response.json();
}
