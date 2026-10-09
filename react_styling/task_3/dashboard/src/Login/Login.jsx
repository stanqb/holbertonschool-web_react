import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className="App-body border-t-4 border-[color:var(--main-color)] min-h-[45vh] px-10 pt-5 text-xl">
      <p>Login to access the full dashboard</p>
      <div className="App-form flex items-center gap-2 mt-8 text-lg">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-52 border border-black rounded"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-52 border border-black rounded"
        />
        <button type="submit" className="border border-black rounded px-[3px] cursor-pointer">OK</button>
      </div>
    </div>
  );
}

export default WithLogging(Login);
