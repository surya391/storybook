import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";
import { fn } from 'storybook/test';

const meta = {
    title: "Components/ui/button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: "select",
            description: "Button variants",
            options: [
                "default",
                "description",
                "outline",
                "secondary",
                "ghost",
                "link"
            ]
        },
        size:{
            control:"select",
            description:"button sizes",
            options:['default','sm','lg','icon']
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        size: "sm",
        onClick: fn(() => { console.log('default') }),
        children: "Default button",
        className: "shadow-lg",
    },
};


export const Link: Story = {
    args: {
        variant: "link",
        size: "sm",
        onClick: fn(() => { console.log('default') }),
        children: "Link button",
        className: "shadow-lg",
    },
};
export const Ghost: Story = {
    args: {
        variant: "ghost",
        size: "lg",
        disabled: false,
        onClick: fn(() => { console.log('default') }),
        children: "Ghost button",
        className: "shadow-lg",
    },
};
export const Destructive: Story = {
    args: {
        variant: "destructive",
        size: "lg",
        disabled: false,
        onClick: fn(() => { console.log('default') }),
        children: "Destuctive button",
        className: "shadow-lg",
    },
};
export const Secondary: Story = {
    args: {
        variant: "secondary",
        size: "lg",
        onClick: fn(() => { console.log('default') }),
        children: "secondary button",
        className: "shadow-lg",
    },
};
export const Outline: Story = {
    args: {
        variant: "outline",
        size: "sm",
        onClick: fn(() => { console.log('default') }),
        children: "outline button",
        className: "shadow-lg rounded-none",
    },
};

// import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// import { fn } from 'storybook/test';

// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
