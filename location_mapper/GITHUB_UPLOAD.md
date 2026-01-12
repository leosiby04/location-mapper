# How to Upload to GitHub

I have already initialized the Git repository and committed your files locally. Now you just need to put them on GitHub.

## Step 1: Create a Repository on GitHub
1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon in the top-right corner and select **New repository**.
3.  **Repository name**: Enter `location-mapper` (or any name you like).
4.  **Public/Private**: Choose your preference (Public is required for free GitHub Pages hosting).
5.  **Initialize this repository with**: Leave all these unchecked (no README, no .gitignore, no License) because we already have code.
6.  Click **Create repository**.

## Step 2: Push Your Code
Once the repository is created, you will see a screen with setup commands. Look for the section **"…or push an existing repository from the command line"**.

Copy and run the following commands in your terminal (I've prepared them for you, just replace `YOUR_USERNAME`):

```bash
git remote add origin https://github.com/YOUR_USERNAME/location-mapper.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages (Optional)
If you want to host it on GitHub Pages instead of Vercel:
1.  Go to your repository **Settings**.
2.  Click **Pages** on the left sidebar.
3.  Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
4.  Click **Save**.
5.  Your site will be live at `https://YOUR_USERNAME.github.io/location-mapper/`.
