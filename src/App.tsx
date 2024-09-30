import { QueryClient, QueryClientProvider } from "react-query";
import Heroes from "./components/Heroes";

const queryClient = new QueryClient;
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <div>
        <Heroes />
      </div>
    </QueryClientProvider>
    </>
  );
}

export default App;