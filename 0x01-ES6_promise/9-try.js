export default function guardrail(mathFunction) {
  const myQueue = [];
  try {
    myQueue.push(mathFunction());
  } catch (error) {
    myQueue.push(String(error));
  } finally {
    myQueue.push('Guardrail was processed');
  }
  return myQueue;
}
