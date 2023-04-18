import InputBox from "./components/InputBox";

const App: React.FC = () => {
  return (
    <div dir="rtl">
      <div className="p-4">
        <div className="w-96">
          {/* Input box with placeholder */}
          <p className="mb-4 font-bold">InputBox به همراه placeholder: </p>

          {/* With white theme */}
          <InputBox label="نام کاربری" themeColor="white"
            placeholder="لطفا نام کاربری خود را وارد کنید" />

          <div className="bg-gray-300 p-2">
            {/* With dark-2 theme */}
            <InputBox label="نام کاربری" themeColor="dark-2"
              placeholder="لطفا نام کاربری خود را وارد کنید" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;