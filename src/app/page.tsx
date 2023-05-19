import SummarySection from "@/app/sections/SummarySection";

const page = () => {
	return (
		<section className="bg-slate-900">
			<div className="bg-gradient-to-b from-violet-600/[.15] via-transparent min-h-screen flex items-center px-6">
				<SummarySection />
			</div>
		</section>
	);
};

export default page;
