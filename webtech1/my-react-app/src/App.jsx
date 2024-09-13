import Footer from './Footer'
import Header from './Header/Header'
import Card from './Card'
import Button from './Button/Button'
import Student from './Student'
import UserGreeting from './UserGreeting'

function App() {
  return(
    <>
    <Header></Header>
    <Card></Card><br />
    <Student name="Krisztián Szalóczy" age={22} isStudent={true} studies="University of Miskolc, Computer Science Bsc"></Student>
    <UserGreeting isLoggedIn={true} username="Szalo"></UserGreeting>
    <Button></Button>
    <Footer></Footer>
    </>
  );

}
 
export default App
