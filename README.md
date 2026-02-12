# ⚡ Mini Single-Page Application (SPA) | Vanilla JS Routing - Task 15

**A dynamic, single-page application demonstrating client-side routing, modular architecture, and state management using the History API without external frameworks.**

### 🔴 **Live Demo:** [Click Here to View](https://sharanx77.github.io/task_15.elevateslabs/)

---

## 🚀 About The Project

**"Retro Game Database"** was developed for the **Elevate Labs Web Development Internship (Task 15)**. This project builds a fully functional Single-Page Application (SPA) from scratch using Vanilla JavaScript. Unlike traditional multi-page websites, this application loads a single HTML shell and dynamically updates content as the user navigates, providing a seamless, app-like experience without page reloads.

### 🎯 Key Features
* **Client-Side Routing:** Navigates between views (Home, Operatives, Sectors) instantly without triggering a browser page reload.
* **History API Integration:** Uses `pushState` and `popstate` to manage the URL and browser history, ensuring the "Back" and "Forward" buttons work correctly.
* **Modular Architecture:** Separates data (mock database), view templates (HTML generators), and routing logic into distinct modules.
* **Dynamic Content Injection:** Renders content programmatically based on URL parameters (e.g., viewing details for a specific character).
* **Theme Switcher:** Includes a toggle to switch between "Terminal" (Green/Black) and "Arcade" (Neon Purple) visual themes using CSS variables.
* **Simulated Backend:** Features a mock "loading" delay and 404 error handling to simulate real-world application behavior.

---

## 🧰 Tech Stack

* **HTML5:** Single file "Shell" structure serving as the application container.
* **CSS3:**
    * **CSS Variables:** For efficient theme switching and consistent styling.
    * **Animations:** Smooth transitions and loading spinner effects.
    * **Grid/Flexbox:** Responsive layout for card grids and navigation.
* **JavaScript (ES6+):**
    * **History API:** Manages session history and URL updates (`window.history`).
    * **DOM Manipulation:** Dynamically injects view templates into the main container.
    * **Event Delegation:** Efficiently handles navigation clicks across the application.
    * **Asynchronous Logic:** Uses `async/await` to simulate network latency.
* **Development Tools:** VS Code, Git, and GitHub Pages.

---

## 🛠️ Technical Implementation Details
This project fulfills the specific requirements for Task 15:

* **SPA Architecture:** The application uses a single `index.html` file. All subsequent navigation is handled by JavaScript intercepting link clicks.
* **Route Matching:** A custom router function parses the current path (e.g., `/characters/c1`) and matches it against defined route objects to render the correct view.
* **State Persistence:** The application correctly handles browser navigation events (`popstate`) to ensure the view stays in sync with the URL.
* **Mock Database:** A JavaScript object serves as the data source, allowing for scalable content without hardcoding HTML for every item.

> **⚠️ Note on Refresh Behavior:**
> Since this is a client-side SPA using the History API (`pushState`), refreshing the page while on a specific sub-route (e.g., `/characters`) may result in a **404 Error** on GitHub Pages or standard static servers. This is expected behavior for SPAs without a configured backend (like Nginx) to redirect all requests to `index.html`. The navigation logic works perfectly within the application session.

```
/Task_15_SPA_Project
├── index.html        # Main Application Shell (The only HTML file)
├── style.css         # CSS Variables (Themes) & Layout Styles
├── app.js            # Main Logic (Router, Data, Views, Events)
└── README.md         # Project Documentation

```
## 🔮 Future Roadmap
* ✅ **Phase 1:** (Completed) Core routing logic, modular views, and theme switching.
* 🔄 **Phase 2:** Implement a **Hash Router** fallback to support page refreshing on static hosts like GitHub Pages.
* 🔄 **Phase 3:** Connect to a real public API (like PokeAPI) instead of using a static mock database.
* 🔄 **Phase 4:** Add persistent user preferences (saving the selected theme to LocalStorage).

---

## 👨‍💻 Author
**B Sharana Basava**
*Electronics and Communication Engineering Student*

* **LinkedIn:** [B Sharana Basava](https://www.linkedin.com/in/b-sharanabasava/)
* **GitHub:** [Sharanx77](https://github.com/Sharanx77)
* **Email:** [b.sharanabasava2006@gmail.com](mailto:b.sharanabasava2006@gmail.com)

---

## 🙌 Acknowledgments
* **Elevate Labs** for the task guidelines on building Single-Page Applications.
* **MDN Web Docs** for documentation on the History API and `pushState`.
* **Gemini AI** for assistance with modular code structure and routing logic.
