import { Button, Input } from '@acme/ui-legacy';
import { validateForm, createFormSchema } from '@acme/form';
import { z } from 'zod';

const userSchema = createFormSchema({
  name: z.string().min(1),
  email: z.string().email(),
});

export function App() {
  const handleSubmit = (data) => {
    try {
      const validated = validateForm(userSchema, data);
      console.log('Valid data:', validated);
    } catch (error) {
      console.error('Validation error:', error);
    }
  };

  return (
    <div>
      <h1>React 18 App (Legacy)</h1>
      <Input placeholder="Enter name" />
      <Button onClick={() => handleSubmit({ name: 'John', email: 'john@example.com' })}>
        Submit
      </Button>
    </div>
  );
}
