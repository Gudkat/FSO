const AddNew = ({ onSubmit, nameVal, onNameChange, numVal, onNumChange}) => {
  return (
    <div>
      <h2>add a new</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: 
          <input 
            value={nameVal} 
            onChange={onNameChange}
          />
        </div>
        <div>
          number:
          <input 
            value={numVal}
            onChange={onNumChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddNew