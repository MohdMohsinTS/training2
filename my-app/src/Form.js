const Form = () => {
  return (
    <div
      style={{ width: "400px", height: "400px", backgroundColor: "red",margin:"auto",marginTop:"120px"}}
    >
        <div className="d-flex justify-content-center flex-column py-4">
        <div className="mb-5">
        <div>enter name</div>
        <input></input>
        </div>
        <div className="mb-5">
        <div>enter salary</div>
        <input></input>
        </div>
        <div className="mb-5">
        <div>enter designation</div>
        
        <input></input>
        </div>
        <button className="m-4">submit</button>
    </div>
    </div>
  );
};
export default Form;
