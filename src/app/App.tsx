import './styles/index.scss'
import { Link } from 'react-router-dom'
import { className } from 'shared/lib/classNames/className'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  )
}

export default App
