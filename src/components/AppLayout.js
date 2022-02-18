import Header from './Header'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout;