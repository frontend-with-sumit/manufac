import { useEffect, useState } from "react";
import { Wine } from "../types";
import {
	calculateMean,
	calculateMedian,
	calculateMode,
} from "../utils/numberUtils";

interface Props {
	data: Wine[];
	type: "mean" | "mode" | "median";
	property: string;
}

const Stats = ({ data, type, property }: Props) => {
	const [items, setItems] = useState<number[]>([]);

	useEffect(() => {
		data.length && prepareData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	const prepareData = () => {
		switch (property) {
			case "Flavanoids":
				return setItems(data.map((d) => +d[property]));
			case "Gamma":
				const gamma = data.map(
					(d) => (+d["Ash"] * +d["Hue"]) / +d["Magnesium"]
				);
				return setItems(gamma);
			default:
				setItems([]);
		}
	};

	return (
		<>
			{type === "mean"
				? calculateMean(items)
				: type === "mode"
				? calculateMode(items)
				: calculateMedian(items)}
		</>
	);
};

export default Stats;
