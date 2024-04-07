import './App.css'
import { ClassroomScreen } from './components/Screens/ClassroomScreen';
import { CoursesScreen } from './components/Screens/CoursesScreen';
import { DashboardScreen } from './components/Screens/DashboardScreen';
import { DocsScreen } from './components/Screens/DocsScreen';
import { HomeScreen } from './components/Screens/HomeScreen';
import { InsightsScreen } from './components/Screens/InsightsScreen';
import { MessagesScreen } from './components/Screens/MessagesScreen';
import { SearchScreen } from './components/Screens/SearchScreen';
import { TestsScreen } from './components/Screens/TestsScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/insights" element={<InsightsScreen />} />
        <Route path="/docs" element={<DocsScreen />} />
        <Route path="/classroom" element={<ClassroomScreen />} />
        <Route path="/tests" element={<TestsScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path="/messages" element={<MessagesScreen />} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
