import './App.css'
import { Login } from './components/Login/LoginComponent';
import { EducatorsScreen } from './components/Screens/EducatorScreen';
import { CoursesScreen } from './components/Screens/CoursesScreen';
import { DashboardScreen } from './components/Screens/DashboardScreen';
import { DocsScreen } from './components/Screens/DocsScreen';
import { InsightsScreen } from './components/Screens/InsightsScreen';
import { MessagesScreen } from './components/Screens/MessagesScreen';
import { SearchScreen } from './components/Screens/SearchScreen';
import { TestsScreen } from './components/Screens/TestsScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';
import ErrorScreen from './components/Screens/ErrorScreen';
import MessageScreen from './components/Screens/MessageScreen/MessageScreen';
import SingleCourseScreen from './components/Screens/SingleCourseScreen/SingleCourseScreen';
import { AddTestsScreen } from './components/Screens/AddTestsScreen/AddTestsScreen';
import ProfileScreen from './components/Screens/ProfileScreen/ProfileScreen';
import SettingsScreen from './components/Screens/SettingsScreen/SettingsScreen';
import { AddQuestions } from './components/AddQuestions/AddQuestions';

function App() {

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0369a1',
      dark: '#0369a1',
      light: '#0369a1'
    },
    secondary: {
      main: '#ef4444'
    }
  },
});

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Toaster
          toastOptions={{
            style: {
              border: "1px solid #4ade80",
              padding: "8px",
              color: "#ccc",
              backgroundColor: '#166534',
            },
            success: {
              duration: 2000,
              style: {
                backgroundColor: "#166534",
                color: "#ccc"
              },
              position: "top-right"
            },
            error: {
              duration: 2000,
              style: {
                backgroundColor: "#991b1b",
                color: "#ccc"
              },
              position: "top-right"
            },
            custom: {
              duration: 3000,
              position: "bottom-center",
              style: {
                backgroundColor: "#292524",
                color: "#ccc",
                border: '1px solid',
                borderColor: '#ccc'
              }
            }
          }}
        />
    <BrowserRouter> 
      <Routes>
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardScreen />} />
        <Route path='/courses/:id' element={<SingleCourseScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/insights" element={<InsightsScreen />} />
        <Route path="/docs" element={<DocsScreen />} />
        <Route path="/educators" element={<EducatorsScreen />} />
        <Route path="/tests" element={<TestsScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path="/messages" element={<MessagesScreen />} />
        <Route path="/messages/:id" element={<MessageScreen />} />
        <Route path="/add-test" element={<AddTestsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path='/add-test/add-questions' element={<AddQuestions />} />
      </Routes>
    </ BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
