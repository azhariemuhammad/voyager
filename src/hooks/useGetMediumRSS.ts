import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

const rssToJSON = import.meta.env.VITE_RSS_JSON || "";
const mediumRss = import.meta.env.VITE_MEDIUM_RSS || "";

const useGetMediumRSS = () => {
  const { data, error } = useSWR(`${rssToJSON}?rss_url=${mediumRss}`, fetcher);
  console.log({ data });
  return { data, error };
};

export default useGetMediumRSS;
