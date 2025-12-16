# 🚀 Setup Instructions

## Step 1: Install Dependencies

```bash
cd template-react-pro
npm install
```

## Step 2: Add Shadcn UI Components

Run this command to add all 50+ components at once:

```bash
npx shadcn-ui@latest add accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button calendar card carousel checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input input-otp label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet skeleton slider sonner switch table tabs textarea toast toggle toggle-group tooltip
```

This will take 2-3 minutes to complete.

## Step 3: Test Locally

```bash
npm run dev
```

Visit `http://localhost:32100` - you should see the template working!

## Step 4: Push to GitHub

### Option A: Using GitHub CLI (recommended)

```bash
git init
git add .
git commit -m "Initial React Pro template with 50+ Shadcn components"
gh repo create YOUR_USERNAME/template-react-pro --public --source=. --remote=origin
git push -u origin main
```

### Option B: Manual

1. Go to https://github.com/new
2. Repository name: `template-react-pro`
3. Make it **Public**
4. Click "Create repository"
5. Then run:

```bash
git init
git add .
git commit -m "Initial React Pro template with 50+ Shadcn components"
git remote add origin https://github.com/YOUR_USERNAME/template-react-pro.git
git branch -M main
git push -u origin main
```

## Step 5: Update iSTUDIOX

In your iSTUDIOX project, update `src/shared/templates.ts`:

```typescript
{
  id: "react-pro",
  title: "React Pro (50+ Components)",
  description: "Vite + React + Shadcn UI. Production-ready component library.",
  githubUrl: "https://github.com/YOUR_USERNAME/template-react-pro", // ✅ Update this!
  isOfficial: true,
  hasComponentLibrary: true,
  componentCount: 52, // Update after counting components
  framework: "react",
}
```

## Step 6: Test in iSTUDIOX

1. Open iSTUDIOX
2. Create New App
3. Select "React Pro (50+ Components)"
4. Wait for cloning...
5. Check that `.istudiox/library.json` is created
6. Send AI message: "Create a login form"
7. Verify AI uses existing components!

## Troubleshooting

### Components not found?
Make sure you ran the `npx shadcn-ui@latest add ...` command in Step 2.

### Port already in use?
Change the port in `vite.config.ts` if 32100 is taken.

### TypeScript errors?
Make sure all dependencies installed: `npm install`

---

**Total time:** ~10 minutes (including component installation) 🎉
