import "./Contact2.css";

const Contact2 = () => {
  return (
    <>
      <div>Contact Agent Botell:</div>
      <div className="form-style-3">
        <form
          target="_blank"
          action="https://formsubmit.co/e1b339b9a8156e18552f3371af9f6826"
          method="POST">
          <fieldset>
            <label for="field1">
              <span>
                Name <span className="required">*</span>
              </span>
              <input
                type="text"
                className="input-field"
                name="field1"
                value=""
              />
            </label>
            <label for="field2">
              <span>
                Email <span className="required">*</span>
              </span>
              <input
                type="email"
                className="input-field"
                name="field2"
                value=""
              />
            </label>

            <label for="field6">
              <span>
                Message <span className="required">*</span>
              </span>
              <textarea name="field6" className="textarea-field"></textarea>
            </label>
            <label>
              <span> </span>
              <input type="submit" value="Submit" />
            </label>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Contact2;
