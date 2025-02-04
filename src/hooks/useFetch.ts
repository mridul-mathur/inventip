import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const useBlogs = () => {
  const { data, error, isLoading } = useSWR(
    "https://inventip-admin.vercel.app/api",
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60000 }
  );

  return { data, isLoading, error };
};

export default useBlogs;
