import { default as MapComponent } from "../app/components/map/index.js";
import Typography from '@mui/material/Typography';
import '../styles/index.css'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h4" component="h4" className="header">
        Find the places of your favorite food
      </Typography>
      <MapComponent />
    </main>
  );
}

export default Home;
