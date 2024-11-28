import Button from "@/components/Button";

export default function Hero() {
	return <section className={'py-24'}>
		<div className="container">
			<div className={'flex justify-center'}>

				<div className={'inline-flex py-1 px-3 bg-gradient-to-r' +
					' from-purple-400 to-pink-400 rounded-full text-neutral-950' +
					' font-semibold'}>✨ $7.5M seed round raised
				</div>
			</div>
			<h1 className={'text-6xl font-medium text-center mt-6 md:text-7xl'}>Impactful design, created effortlessly</h1>
			<p className={'text-center font-xl text-white/50 mt-8 max-w-2xl mx-auto'}>Design tools shouldn&apos;t slow you down. Layers combines powerful
				features with an intuitive interface that keeps you in your
				creative flow
			</p>



			<form className={'flex justify-between border border-white/15' +
				' rounded-full p-2' +
				' mt-8 md:max-w-lg mx-auto overflow-clip'}>


				<input
					type="email"
					name="email"
					id="email"
					placeholder={'Enter your email'}
					className={'bg-transparent pl-4 focus:outline-none max-w-[200px]' +
						' md:max-w-full'}
				/>

				<Button type="submit" size={'sm'} variant={'primary'} className={'whitespace-nowrap'}>Sign Up</Button>

			</form>

		</div>
	</section>;
}
