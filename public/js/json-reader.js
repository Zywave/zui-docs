async function readJSON(callback) {
  const response = await fetch(`${location.pathname}/analysis.json`);
  if (response.ok) {
    const content = await response.json();
    callback(content);
  }
}
