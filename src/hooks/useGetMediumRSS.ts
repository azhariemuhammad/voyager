import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

const rssToJSON = process.env.RSS_JSON || "";
const mediumRss = process.env.MEDIUM_RSS || "";

const useGetMediumRSS = () => {
  const { data, error } = useSWR(`${rssToJSON}?rss_url=${mediumRss}`, fetcher);
  console.log({ data });
  return { data, error };
};

export default useGetMediumRSS;
