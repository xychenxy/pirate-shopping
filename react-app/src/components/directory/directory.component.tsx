import { useEffect, useState } from "react";
import { fetchDirectoryAsync } from "../../store/directory/directory.action";
import {
	selectDirectoryMap,
	selectDirectoryIsLoading,
} from "../../store/directory/directory.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CategoryItem from "../directory-item/directory-item.component";
import Spinner from "../spinner/spinner.component";
import { DirectoryContainer } from "./directory.styled";
import { DirectoryCategory } from "../../store/directory/directory.types";

const Directory = () => {
	const dispatch = useAppDispatch();

	const directoryMap = useAppSelector(selectDirectoryMap);
	const isLoading = useAppSelector(selectDirectoryIsLoading);

	const [directory, setDirectory] = useState<DirectoryCategory[]>([]);

	useEffect(() => {
		dispatch(fetchDirectoryAsync());
	}, []);

	useEffect(() => {
		setDirectory(directoryMap);
	}, [directoryMap]);

	return (
		<DirectoryContainer>
			{isLoading ? (
				<Spinner />
			) : (
				directory.map((category: DirectoryCategory, index: number) => (
					<CategoryItem key={index} category={category} />
				))
			)}
		</DirectoryContainer>
	);
};

export default Directory;
