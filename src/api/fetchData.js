export async function fetchData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fathur-md/your-repo/main/public/data.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
