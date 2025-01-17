import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/TypeButton',
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'green', value: '#57B626' },
        { name: 'dark', value: '#333' },
        { name: 'light', value: '#E8E8E8' },
      ],
    },
  },
  args: {
    label: 'Primary Button',
    className: 'btn btn-primary',
    type: 'button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /primary button/i, // Match the button by its accessible name (case-insensitive)
    });
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    className: 'btn btn-secondary',
    type: 'submit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /Secondary button/i, // Match the button by its accessible name (case-insensitive)
    });
    await userEvent.click(button);
  },
};
