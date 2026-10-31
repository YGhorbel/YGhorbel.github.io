import { BrowserRouter as Router, Routes, Route } from "react-router";

import Layout from "@/layout";
import { loadLazy } from "@/lib/loadComponent";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/hooks/scroll-to-top";
import { useGlobalMeta } from "./hooks/use-global-meta";

const HomePage = loadLazy(() => import("@/pages/home"));
const MoviesPage = loadLazy(() => import("@/pages/movies"));
const MusicPage = loadLazy(() => import("@/pages/music"));
const ProjectsPage = loadLazy(() => import("@/pages/projects"));
const TalksPage = loadLazy(() => import("@/pages/talks"));
const MemoriesPage = loadLazy(() => import("@/pages/posts"));
const PublicationsPage = loadLazy(() => import("@/pages/publications"));
const ArticlesPage = loadLazy(() => import("@/pages/articles"));
const ArticlePage = loadLazy(() => import("@/pages/articles/page"));
const NotFoundPage = loadLazy(() => import("@/pages/notfound"));

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

// keep old "#/talks" style links working by turning them into "/talks"
if (window.location.hash.startsWith("#/")) {
  window.history.replaceState(null, "", basename + window.location.hash.slice(1));
}

export default function App() {
  useGlobalMeta();

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="music" element={<MusicPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="talks" element={<TalksPage />} />
            <Route path="memories" element={<MemoriesPage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
