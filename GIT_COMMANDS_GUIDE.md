# Complete Git Push and Pull Guide

## Which Terminal to Use?

On Windows, you can use any of these terminals:
- **PowerShell** (default on Windows 10/11) - Type `powershell` in Start menu
- **Command Prompt (CMD)** - Type `cmd` in Start menu  
- **Git Bash** - If you installed Git for Windows, search for "Git Bash"
- **VS Code Terminal** - Press `` Ctrl+` `` in VS Code
- **Windows Terminal** - Download from Microsoft Store (recommended)

All work the same way for Git commands!

---

## GIT PUSH - Uploading Code to GitHub

### Step-by-Step Process:

#### Step 1: Open Terminal
Open PowerShell, Command Prompt, or Git Bash in your project folder.

#### Step 2: Navigate to Your Project (if not already there)
```bash
cd C:\Users\dell\Logisticswebapp
```

#### Step 3: Check Current Status
See what files have changed:
```bash
git status
```

#### Step 4: Add Files to Staging Area
Add all changed files:
```bash
git add .
```
Or add specific files:
```bash
git add src/pages/Login.jsx
git add src/styles/Login.css
```

#### Step 5: Commit Your Changes
Save your changes with a descriptive message:
```bash
git commit -m "Add login page styling"
```
Or for multiple changes:
```bash
git commit -m "Update login page with new design and fix responsive issues"
```

#### Step 6: Push to GitHub
Upload your commits to GitHub:
```bash
git push
```
Or explicitly specify:
```bash
git push origin main
```

**First time pushing?** You might need to set upstream:
```bash
git push -u origin main
```

---

## GIT PULL - Downloading Code from GitHub

### Step-by-Step Process:

#### Step 1: Open Terminal
Open PowerShell, Command Prompt, or Git Bash in your project folder.

#### Step 2: Navigate to Your Project
```bash
cd C:\Users\dell\Logisticswebapp
```

#### Step 3: Check Current Status (Optional)
See if you have any local changes:
```bash
git status
```

#### Step 4: Pull Latest Changes
Download and merge changes from GitHub:
```bash
git pull
```
Or explicitly:
```bash
git pull origin main
```

#### Step 5: If There Are Conflicts
If you have local changes that conflict:
```bash
# Option 1: Commit your changes first
git add .
git commit -m "My local changes"
git pull

# Option 2: Stash your changes, pull, then reapply
git stash
git pull
git stash pop
```

---

## Complete Workflow Example

### Scenario: Making Changes and Pushing

```bash
# 1. Check what's changed
git status

# 2. See the differences (optional)
git diff

# 3. Add all changes
git add .

# 4. Commit with a message
git commit -m "Add new feature: user authentication"

# 5. Push to GitHub
git push
```

### Scenario: Getting Latest Changes

```bash
# 1. Pull latest code
git pull

# 2. If package.json changed, update dependencies
npm install

# 3. Start development server
npm run dev
```

---

## Common Git Commands Reference

```bash
# Check status
git status

# View commit history
git log

# View remote repository
git remote -v

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# See differences
git diff

# Discard local changes (be careful!)
git checkout -- filename

# View all branches
git branch -a
```

---

## Troubleshooting

### Authentication Issues
If you get authentication errors, you may need to:
1. Use Personal Access Token instead of password
2. Configure Git credentials:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Merge Conflicts
If `git pull` shows conflicts:
1. Open the conflicted files
2. Resolve conflicts (look for `<<<<<<<`, `=======`, `>>>>>>>`)
3. Then:
```bash
git add .
git commit -m "Resolve merge conflicts"
```

### Undo Last Commit (but keep changes)
```bash
git reset --soft HEAD~1
```

### Undo Last Commit (discard changes)
```bash
git reset --hard HEAD~1
```

---

## Quick Reference Card

**PUSH:**
```bash
git add .
git commit -m "Your message"
git push
```

**PULL:**
```bash
git pull
```

**CHECK STATUS:**
```bash
git status
```

