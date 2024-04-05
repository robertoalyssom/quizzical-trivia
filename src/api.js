export default async function conectApi(category) {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
