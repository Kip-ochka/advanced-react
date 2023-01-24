import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/className'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRouter />
    </div>
  )
}

export default App
