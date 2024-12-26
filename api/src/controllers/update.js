export function update({ request, response, database }) {
  const { id } = request.params;

  database.update("tickets", id, {
    ...request.body,
    updated_at: new Date(),
  });

  return response.end();
}
