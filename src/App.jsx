import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter } from "react-router-dom";
import Demo from "./components/Demo";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
          {/**
           * Head
           * body
           * sidebar
           *   menuitems
           * maincontainer
           *   buttonslist
           *   videocontainer
           *     videocard
           */}
        </div>
      </Provider>
    </>
  );
}

export default App;
