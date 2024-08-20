import myLists from "./myLists.json";
export const MyListsPage = () => {
  return (
    <div>
      <h1>My lists</h1>
      {myLists.lists.map((list) => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <ul>
            {list.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Displays the user's existing lists
//Shows a summary of each list
//Provides a button to create a new list
// Clicking on a list will navigate the user to the detailed view of that list
