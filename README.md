# fullstack-rick-n-morty

### MortyDex - Explore Mortys Across Dimensions

Fullstack-rick-n-morty:MortyDex is a Next.js project that allows users to explore various Mortys from different dimensions in the Rick and Morty universe. The project functions similarly to a Pokedex, offering a paginated grid of alive Mortys and detailed information page about each, including their name, origin, location details, and episode details etc.

### Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kaustubh285/fullstack-rick-n-morty.git
   cd fullstack-rick-n-morty
   ```

2. **Install Dependencies:**

   ```bash
   yarn install
   ```

3. **Run the Development Server:**

   ```bash
   yarn run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view!

### Project Structure

- `src/app/`: Contains Next.js pages for different routes.
- `src/components/`: Reusable React components.
- `src/types/`: Includes the TypeScript type definitions.
- `src/lib/`: Contains helper functions.
- `src/app/api`: Contains routes for the Next.js backend APIs.
- `public/`: Static assets.

### Project Workflow

1. The frontend extracts the page number from the URL (page 1 if none exists) and makes a request to the backend for page data.
2. The backend communicates with the Rick and Morty API to fetch alive Morty s data.
3. The backend formats the data and sends it to the frontend.
4. The frontend then displays a paginated grid of alive Mortys, View Profile shows the detailed page of the Morty.

### Deployment

The project is hosted on Vercel and is automatically deployed when changes are pushed to the master branch.

Live version accessible here : [https://fullstack-rick-n-morty.vercel.app/](https://fullstack-rick-n-morty.vercel.app/) !

### Code Quality and Pre-commit Hooks

This project maintains code quality through the use of pre-commit hooks. `husky` and `lint-staged` are set up to run before each commit, ensuring that code adheres to the established linting rules.

### Technologies Used

- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **Vercel**

Embark on your Morty journey with Fullstack-rick-n-morty: MortyDex! 🌌🚀
