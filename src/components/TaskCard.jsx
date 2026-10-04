// TaskCard is a small reusable component
// "props" is the data sent from the parent (App)
function TaskCard(props) { // props = { title: "Finish React assignment", category: "Study" }
  return ( // return the JSX to render the card
    <div className="card">
      {/* show the title that App sent */}
      <h3>{props.title}</h3> 
      {/* show the category that App sent */}
      <p>Category: {props.category}</p>
    </div>
  );
}

// export so other files can use TaskCard
export default TaskCard;