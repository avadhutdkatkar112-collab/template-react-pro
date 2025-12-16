# React Pro Template

Production-ready React template with 50+ pre-built components powered by Shadcn UI.

## Features

- ⚡️ Vite for fast development
- ⚛️ React 18 with TypeScript
- 🎨 50+ Shadcn UI components
- 🎭 Tailwind CSS for styling
- 📦 Component library ready for iSTUDIOX AI

## Components Included

- Accordion, Alert, Avatar, Badge, Button, Card, Calendar
- Checkbox, Dialog, Dropdown Menu, Form, Input, Label
- Navigation Menu, Popover, Progress, Radio Group, Select
- Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea
- Toast, Toggle, Tooltip, and many more...

## Getting Started

```bash
npm install

# Add Shadcn UI components
npx shadcn-ui@latest add button input card label tabs badge avatar

# Or add all at once (recommended)
npx shadcn-ui@latest add accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button calendar card carousel checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input input-otp label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet skeleton slider sonner switch table tabs textarea toast toggle toggle-group tooltip

# Start dev server
npm run dev
```

Visit `http://localhost:32100`

## Usage with iSTUDIOX

This template is optimized for use with iSTUDIOX AI app builder. When you create an app from this template:

1. All components are automatically available
2. AI assistant knows about these components
3. AI will use existing components instead of creating new ones
4. Component manifest is auto-generated at `.istudiox/library.json`

## Component Usage

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial React Pro template with Shadcn UI"
git remote add origin https://github.com/YOUR_USERNAME/template-react-pro.git
git branch -M main
git push -u origin main
```

## License

MIT
