import birthdaysData from "./api/birthdays.json";
import CustomTags from "./components/CustomTags";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Tooltip } from "react-tooltip";

interface Birthday {
	name: string;
	date: Date;
}

function calculateDaysUntilDate(targetDate: Date): number {
	const difference = targetDate.getTime() - new Date().getTime();
	return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

function calculatePercent(targetDate: Date): number {
	const difference = targetDate.getTime() - new Date().getTime();
	const oneYear = 1000 * 60 * 60 * 24 * 365;

	return ((oneYear - difference) / oneYear) * 100;
}

export default function Birthdays() {
	const birthdays: Birthday[] = [];

	for (const birthday of birthdaysData) {
		const newBirthday: Birthday = {
			name: birthday.name,
			date: new Date(birthday.date + " " + new Date().getFullYear())
		};

		if (newBirthday.date.getTime() + 86400000 < new Date().getTime()) {
			newBirthday.date.setFullYear(new Date().getFullYear() + 1);
		}

		birthdays.push(newBirthday);
	}

	birthdays.sort((a, b) => {
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	});

	const { width, height } = useWindowSize();

	let birthdayToday = false;
	for (const birthday of birthdays) {
		if (birthday.date.getTime() + 86400000 > new Date().getTime() && birthday.date.getTime() < new Date().getTime()) {
			birthdayToday = true;
			break;
		}
	}

	return (
		<div className="container mx-auto mt-8">
			{birthdayToday ? <Confetti width={width} height={height * 2}></Confetti> : <></>}

			<CustomTags title="Birthdays" description="List of upcoming birthdays" />

			<div className="lg:p-8 p-4 shadow-xl rounded-xl bg-lochmara-200 m-2 mt-8 lg:m-8">
				<h1 className="text-3xl font-semibold mb-4">Birthdays</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{birthdays.map((birthday) => (
						<div key={birthday.name} className="bg-lochmara-100 rounded-xl shadow-md p-6">
							<div className="flex">
								<Tooltip id={birthday.date.toLocaleDateString()}></Tooltip>
								<h2 className="text-xl font-semibold mb-2" data-tooltip-id={birthday.date.toLocaleDateString()} data-tooltip-content={birthday.date.toLocaleDateString()}>
									{birthday.name}
								</h2>
							</div>

							<p className="mb-4">
								{birthday.date.getTime() + 86400000 > new Date().getTime() && birthday.date.getTime() < new Date().getTime() ? (
									<p className="font-bold">Happy Birthday {birthday.name}!</p>
								) : (
									<>
										{calculateDaysUntilDate(birthday.date)} day{calculateDaysUntilDate(birthday.date) === 1 ? "" : "s"} ({calculatePercent(birthday.date).toFixed(2)}%)
									</>
								)}
							</p>
							<div className="h-4 bg-lochmara-200 border border-lochmara-300 rounded-full overflow-hidden">
								<div className="bg-lochmara-500 h-full" style={{ width: `${calculatePercent(birthday.date)}%` }}></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
