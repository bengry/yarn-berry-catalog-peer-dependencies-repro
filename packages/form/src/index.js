import { z } from 'zod';

export function validateForm(schema, data) {
  return schema.parse(data);
}

export function createFormSchema(fields) {
  return z.object(fields);
}
