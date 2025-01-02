import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";
import DefaultLayout from "./layouts/default";
import Index from "./pages";
import Explore from "./pages/explore";
import Auth from "./pages/auth";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
            </Routes>
          </div>
        </DefaultLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
