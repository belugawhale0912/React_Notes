import List from "./List"

function App() {
  const fruits = [{id:1, name:"apple", calories:95}, 
                  {id:2, name:"orange", calories:45}, 
                  {id:3, name:"banana", calories:105}, 
                  {id:4, name:"watermelon", calories:140}, 
                  {id:5, name:"honeydew", calories:120}];

  const vegetables = [{id:1, name:"potato", calories:110}, 
                      {id:2, name:"celery", calories:15}, 
                      {id:3, name:"carrots", calories:25}, 
                      {id:4, name:"corn", calories:63}, 
                      {id:5, name:"broccoli", calories:50}];
  return(
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null };
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>} {/* and operator shorthand instead of ternary operator  */}
       
    </>
  );
}

export default App
