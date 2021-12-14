export default function Home() {
	return (
		<div
			className="h-screen"
			style={{
				background: "rgb(238,174,202)",
				background:
					"linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
			}}>
			<div className="flex h-screen items-center justify-center flex-col">
				<div className="text-8xl text-orange-600">CriPoint</div>.
				<div className="mt-6 text-lg text-black typewriter">
					One stop for all cricket fans.
				</div>
				<div className="coming-soon mt-10">Coming Soon!</div>
			</div>
		</div>
	);
}
