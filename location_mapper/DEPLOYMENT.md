# How to Deploy to Vercel

There are two main ways to deploy your Location Mapper application to Vercel: using the **Vercel CLI** (simplest for quick tests) or via **Git Integration** (recommended for long-term projects).

## Option 1: Using Vercel CLI (Fastest)

1.  **Install Vercel CLI**:
    Open your terminal/command prompt and run:
    ```bash
    npm i -g vercel
    ```

2.  **Login**:
    Run the following command and follow the instructions to log in to your Vercel account:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Navigate to your project folder (`c:\Users\Leo\.gemini\antigravity\scratch\location_mapper`) in the terminal and run:
    ```bash
    vercel
    ```

4.  **Follow the Prompts**:
    - Set up and deploy? **Y**
    - Which scope? (Select your account)
    - Link to existing project? **N**
    - Project name? (Press Enter for default or type a name like `location-mapper`)
    - In which directory is your code located? (Press Enter for `./`)
    - Want to modify these settings? **N**

    Vercel will upload your files and give you a **Production** URL (e.g., `https://location-mapper-yourname.vercel.app`).

## Option 2: Using Git (Recommended)

1.  **Push to GitHub/GitLab/Bitbucket**:
    - Initialize a git repo: `git init`
    - Add files: `git add .`
    - Commit: `git commit -m "Initial commit"`
    - Create a new repository on GitHub.
    - Push your code to the new repository.

2.  **Connect to Vercel**:
    - Go to [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** -> **"Project"**.
    - Select your Git provider (e.g., GitHub).
    - Find your `location_mapper` repository and click **Import**.

3.  **Configure & Deploy**:
    - Framework Preset: **Other** (since it's just HTML/CSS/JS).
    - Root Directory: `./` (default).
    - Click **Deploy**.

    Vercel will build your site and provide a live URL. Any time you push changes to Git, Vercel will automatically redeploy!

## Verification
Once deployed, open the provided URL on your phone or computer to verify the map works publicly.
