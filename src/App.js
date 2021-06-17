import './App.css';
import OTP from './components/OTP'

function App() {
  return (
    <div className="App">
      <OTP
        required
        autoFocus
        isNumberInput
        length={4}
        onChangeOTP={(otpValue) => console.log(otpValue)}
      />
    </div>
  );
}

export default App;
