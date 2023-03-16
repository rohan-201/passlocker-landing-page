import logo from "@/public/passlock-logo.svg";
import twitter from "@/public/twitter.svg";
import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-[#1F1F1F] text-white">
			<div className="container mx-auto max-w-4xl px-4">
				<a
					href="https://twitter.com/PassLockerExt"
					target="_blank"
					className="hover:opacity-80 float-right mt-12 mr-8"
				>
					<Image src={twitter} alt="twitter" width="30" />
				</a>
				<div className="flex items-center flex-col justify-around min-h-screen py-8">
					<h1 className="text-5xl">Coming soon!</h1>
					<p className="text-4xl text-center">
						Introducing first ever password manager on Solana
					</p>
					<Image src={logo} alt="passlock logo" height={120} />
					<h2 className="text-5xl">Passlocker</h2>
					<a
						target="_blank"
						href="https://nptipua9ntd.typeform.com/to/rb90aWvE"
						className="border-[1px] rounded-md border-white py-2 px-4 hover:opacity-80"
					>
						Get early access when we arrive
					</a>
				</div>
			</div>
		</main>
	);
}
