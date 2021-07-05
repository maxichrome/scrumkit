import { AppProps } from "next/app";
import { resetServerContext } from "react-beautiful-dnd";
import "../style/global.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	// react-beautiful-dnd - required for SSR
	resetServerContext();

	return <Component {...pageProps} />;
};

export default MyApp;
