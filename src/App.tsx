import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";
import DefaultLayout from "./layouts/default";
import Index from "./pages";
import Explore from "./pages/explore";
import Auth from "./pages/auth";

function App() {
  const theme: Theme = {
    name: "my-theme",
    tokens: {
      colors: {
        font: {
          primary: { value: "#F472B6" },
          secondary: { value: "#FB923C" },
          // ...
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme} colorMode="dark">
      <Router>
        <DefaultLayout>
          <div className="w-full overflow-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/artist/:artistId" element={<Explore />} />
            </Routes>
          </div>
        </DefaultLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
