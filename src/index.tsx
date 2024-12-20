import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-lazy-load-image-component/src/effects/blur.css';
const queryClient = new QueryClient()


const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </>,
  );
}
