export const SignInPage = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center flex-col">
			<form className="w-full max-w-sm flex flex-col  dark:bg-gray-800 p-8 rounded-lg">
				<h1 className="text-2xl font-medium mb-10">Login</h1>
				<input
					name="email"
					type="email"
					className="dark:bg-gray-900 w-full h-16 rounded-t-lg px-4 mb-[2px]"
					placeholder="Email"
				/>
				<input
					name="password"
					type="password"
					className="dark:bg-gray-900 w-full h-16 dark:border-gray-600 rounded-b-lg focus:border-pink-500 px-4"
					placeholder="Password"
				/>

				<div className="flex items-center justify-between mt-6">
					<div className="flex items-center justify-between gap-2">
						<input
							type="checkbox"
							name="remenberMe"
							id="remenberMe"
							className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
						/>
						<span className="text-slate-400">Lembrar-me</span>
					</div>
					<a href="" className="underline text-pink-500">
						Esqueceu a senha
					</a>
				</div>

				<button
					type="submit"
					className="w-full h-12 dark:bg-pink-700 rounded-lg mt-11"
				>
					Entrar
				</button>
			</form>
		</div>
	);
};
