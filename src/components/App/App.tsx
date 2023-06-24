import FetchSrc from "../FetchSrc/FetchSrc";
import './assets/index.scss';

const App = () => {
  return (
    <div className="app">
      <FetchSrc src={'forecast?id=524901'}>
          <>
            sdv
          </>
      </FetchSrc>
    </div>
  );
};

export default App;
