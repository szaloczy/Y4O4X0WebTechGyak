import Footer from './Footer'
import Header from './Header/Header'
import ToDoList from './ToDoList';


function App() {

  const fruits = [{id:1, name:"orange", caleroies: 95},
    {id:2, name:"apple", caleroies: 45}, 
    {id:3, name:"banan", caleroies: 159},
];

  return(
    <>
    <Header></Header>
    <ToDoList></ToDoList>
    <Footer></Footer>
    </>
  );

}
 
export default App
