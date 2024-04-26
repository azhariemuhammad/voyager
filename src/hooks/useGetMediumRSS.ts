import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

const rssToJSON = 'https://api.rss2json.com/v1/api.json';
const mediumRss = 'https://medium.com/feed/@azharieazharou';

const useGetMediumRSS = () => {
	const { data, error } = useSWR(`${rssToJSON}?rss_url=${mediumRss}`, fetcher);
	return { data, error };
};

export default useGetMediumRSS;
