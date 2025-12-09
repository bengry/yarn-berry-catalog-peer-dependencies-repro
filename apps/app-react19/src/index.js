import { Button, Input, ModernComponent } from '@acme/ui-next';
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
      <h1>React 19 App (Modern)</h1>
      <ModernComponent />
      <Input placeholder="Enter name" />
      <Button onClick={() => handleSubmit({ name: 'Jane', email: 'jane@example.com' })}>
        Submit
      </Button>
    </div>
  );
}
