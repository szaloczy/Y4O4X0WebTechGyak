import Footer from './Footer'
import Header from './Header/Header'
import Card from './Card'
import Button from './Button/Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import ProfilePicture from './ProfilePicture'
import MyComponent from './MyComponent'
import Counter from './Counter'
import ColorPicker from './ColorPickerComponent'


function App() {

  const fruits = [{id:1, name:"orange", caleroies: 95},
    {id:2, name:"apple", caleroies: 45}, 
    {id:3, name:"banan", caleroies: 159},
];

  return(
    <>
    <Header></Header>
    <Counter></Counter>
    <Footer></Footer>
    </>
  );

}
 
export default App
