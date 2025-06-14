# JobBoard

A **React + Vite** application to manage job listings. Users can add, view, edit, and delete jobs, with data stored via a mock JSON server. This project demonstrates fundamental React concepts, React Router for client-side routing, and Tailwind CSS for styling.

## Features

- **Vite + React**: Fast, lightweight development setup.
- **Tailwind CSS**: Utility-first styling for rapid UI design.
- **React Router**: Client-side routing with nested routes and loaders.
- **CRUD Operations**: Create, Read, Update, Delete job listings.
- **Mock Backend**: Uses [JSON Server](https://github.com/typicode/json-server) for RESTful endpoints.
- **React Toastify**: Shows success/error toast notifications.
- **React Icons**: Easily incorporate icon components.

## Getting Started

1. **Clone** this repository:
   ```bash
   git clone https://github.com/ompatel2019/jobboard.git
   cd jobboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Dev Server** (Frontend):
   ```bash
   npm run dev
   ```
   By default, this starts your React app at [http://localhost:3000](http://localhost:3000).

4. **Run the Mock API** (Backend):
   ```bash
   npm run server
   ```
   This starts JSON Server at [http://localhost:8000/jobs](http://localhost:8000/jobs).  
   *Adjust port or script as needed in `package.json`.*

## Scripts

- **`npm run dev`**  
  Launches the Vite development server for hot-module reloading.
- **`npm run server`**  
  Spins up JSON Server to serve and handle job data.
- **`npm run build`**  
  Creates a production-ready bundle in the `dist/` folder.
- **`npm run preview`**  
  Serves the built output locally for final testing before deployment.

## Deployment

**Option A: Netlify Automatic Build**  
1. Connect your GitHub repo on Netlify’s dashboard.  
2. Under **Build Settings**, set **Build Command** to `npm run build` and **Publish Directory** to `dist/`.  
3. Netlify installs dependencies and builds your app automatically after each push.

**Option B: Manual Deploy**  
1. Run `npm run build` locally.  
2. Drag-and-drop the `dist/` folder into Netlify’s site deployment interface or deploy via the Netlify CLI.

You can also host the mock backend (JSON Server) on a free-tier service like [Render](https://render.com/) or [Railway](https://railway.app/) if you need it online 24/7.

## Project Structure

```
.
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ layouts/
│  ├─ pages/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ jobs.json       # JSON Server data
├─ dist/              # Production build output
├─ package.json
├─ vite.config.js
└─ README.md
```

## License

Feel free to adapt or reuse for personal or commercial projects. Attribution is always appreciated! 

---

**Enjoy managing your React job listings!** If you have any questions or issues, feel free to open an issue or submit a pull request.
