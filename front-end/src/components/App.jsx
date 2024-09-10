import Header from "./layout/header"
import Banner from "./elements/banner"
import Animation from "./elements/animation"
import Main from "./pages/main"
import Footer from "./layout/footer"

const App = () => {
  return (
    <div className="app-body">
      <Header></Header>
      <Banner></Banner>
      <Animation></Animation>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App