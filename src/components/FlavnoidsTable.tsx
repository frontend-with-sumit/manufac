import { useEffect, useState } from "react";

import { Wine } from "../shared/types";
import StatsTable from "../shared/components/StatsTable";

interface Props {
	items: Wine[];
}

const FlavnoidsTable = ({ items }: Props) => {
	const [classes, setClasses] = useState<string[]>([]);

	useEffect(() => {
		items.length && extractClasses();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items]);

	const extractClasses = () => {
		const classesList: string[] = [
			...new Set(items.map((item) => item.Alcohol)),
		]
			.sort()
			.map((c) => `Class ${c}`); // Extracting distinct classes

		setClasses(["Measure", ...classesList]);
	};

	return <StatsTable headers={classes} items={items} name="Flavanoids" />;
};

export default FlavnoidsTable;
