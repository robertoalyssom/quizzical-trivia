export default async function conectApi() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&type=multiple"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
