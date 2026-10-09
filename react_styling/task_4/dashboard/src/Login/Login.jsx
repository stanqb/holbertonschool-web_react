import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className="App-body border-t-4 border-[color:var(--main-color)] min-h-[45vh] px-10 pt-5 text-xl max-[520px]:px-1">
      <p>Login to access the full dashboard</p>
      <div className="App-form flex items-center gap-2 mt-8 text-lg max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-0">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-52 border border-black rounded max-[520px]:w-60 max-[520px]:mb-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-52 border border-black rounded max-[520px]:w-60 max-[520px]:mb-1"
        />
        <button
          type="submit"
          className="border border-black rounded px-[3px] cursor-pointer max-[520px]:mt-1 max-[520px]:px-[5px]"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default WithLogging(Login);
