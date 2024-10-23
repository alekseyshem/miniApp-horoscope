import ReactDOM from "react-dom/client";

import { Root } from "@/components/Root";

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import "./mockEnv.ts";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";
import '../i18n.ts';

// import App from "./components/App.tsx";
// import { BrowserRouter } from "react-router-dom";
// import { SDKProvider } from "@telegram-apps/sdk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <SDKProvider>
//       <App />
//     </SDKProvider>
//   </BrowserRouter>
// );
