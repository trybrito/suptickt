export function updateStatus({ request, response, database }) {
  const { id } = request.params;
  const { solution } = request.body;

  database.update("tickets", id, {
    solution,
    status: "closed",
    updated_at: new Date(),
  });

  return response.end();
}
