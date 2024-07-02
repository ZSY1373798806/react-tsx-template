import React from "react";
import Skton from "../Skeleton";
interface IProps {
	fallback?: React.ReactNode;
	children: React.ReactNode;
}
const Loadable = (props: IProps) => {
	const { fallback, children } = props;
	return (
		<React.Suspense fallback={fallback || <Skton />}>{children}</React.Suspense>
	);
};

export default Loadable;
