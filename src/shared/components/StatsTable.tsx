import Stats from "./Stats";
import { Wine } from "../types";

interface Props {
	headers: string[];
	items: Wine[];
	name: string;
}

const StatsTable = ({ headers, items, name }: Props) => {
	const getDataForClass = (classType: number) =>
		items.filter((item) => item.Alcohol === classType);

	return (
		<table
			border={1}
			cellPadding={10}
			style={{
				borderCollapse: "collapse",
				textAlign: "center",
				marginBlock: "1rem",
			}}
		>
			<thead>
				<tr>
					{headers.map((c, idx) => (
						<th key={idx + 1}>{c}</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr>
					{/* Mean */}
					<td>{`${name} Mean`}</td>
					{headers.slice(1).map((c, idx) => (
						<td key={idx + 1}>
							<Stats
								data={getDataForClass(idx + 1)}
								type="mean"
								property={name}
							/>
						</td>
					))}
				</tr>
				<tr>
					{/* Median */}
					<td>{`${name} Median`}</td>
					{headers.slice(1).map((c, idx) => (
						<td key={idx + 1}>
							<Stats
								data={getDataForClass(idx + 1)}
								type="median"
								property={name}
							/>
						</td>
					))}
				</tr>
				<tr>
					{/* Mode */}
					<td>{`${name} Mode`}</td>

					{headers.slice(1).map((c, idx) => (
						<td key={idx + 1}>
							<Stats
								data={getDataForClass(idx + 1)}
								type="mode"
								property={name}
							/>
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
};

export default StatsTable;
