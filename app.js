// TODO
const {useState} = React;

const groceryList = ['Cucumbers', 'Kale', 'Bread', 'Sugar'];

function App() {
  return (
    <div>
      <h2>Andrew's Grocery List</h2>
      <GroceryList groceryList={groceryList} />
    </div>
  )
}

function GroceryList({groceryList}) {
  return (
    <ul>{groceryList.map(function(item) {
      return <GroceryListItem item={item} />
    })}</ul>
  )
}

function GroceryListItem({item}) {
  const [isDone, setIsDone] = useState(false);

  const style = {
    cursor: 'pointer',
    textDecoration: isDone ? 'line-through' : 'none',
  };

  return <li style={style} onClick={() => setIsDone(!isDone)}>{item}</li>
}

ReactDOM.render(<App />, document.getElementById('app'));
