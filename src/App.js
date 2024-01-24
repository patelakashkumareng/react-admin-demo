import ContentWrapper from "./pages/base/ContentWrapper.js";
import Modal from "./components/UI/Modal.js";

function App() {
  return (
    <ContentWrapper>
      <h2>Hello Word</h2>
      <Modal title="Bootstrap Title">This is the title</Modal>
    </ContentWrapper>
  );
}

export default App;
