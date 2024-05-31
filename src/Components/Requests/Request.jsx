export default function Request(props) {
  function clickRemoveRequestHandler() {
    // call the function received from AllRequests
    props.liftRequestToRemoveHandler(props.book);
  }
  
  return (
    <div  class="request-card">
      <div>
      <h2>{props.book.title}</h2>
      <h3>{props.book.author}</h3>
    </div>
      <img src={props.book.img}></img>
      <button class="cancel-request-button" onClick={clickRemoveRequestHandler}>X</button>
    </div>
  )
}