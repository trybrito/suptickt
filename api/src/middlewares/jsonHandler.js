export async function jsonHandler(request, response) {
  const buffer = [];

  for await (const data of request) {
    buffer.push(data);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffer).toString());
  } catch (error) {
    request.body = null;
  }

  response.setHeader("Content-Type", "application/json");
}
