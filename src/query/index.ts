import { useQuery } from "@tanstack/react-query";
import { TBook } from "@/App";

const fields = ["author_name", "title", "cover_i", "key", "ratings_average", "ratings_count", "oclc", "first_publish_year", "first_sentence", "ddc_sort", "ddc"];

export const searchByText = ({ search }: { search?: string }) => {
  return useQuery<{
    numFound: number;
    offset: number;
    start: number;
    numFoundExact: boolean;
    docs: TBook[]
  }, string>({
    queryKey: ["books", search],
    queryFn: async () => {
      const res = await fetch(`https://openlibrary.org/search.json?` + new URLSearchParams({
        q: `title:${search}`,
        sort: "rating",
        limit: "30",
        fields: fields.join(",")
      }).toString());
      if (res.ok) {
        return await res.json()
      }
      throw new Error("Error fetching books. Please try again later")
    },
    enabled: search !== undefined
  });
}

export const searchByAuthor = ({ author }: { author?: string }) => {

  return useQuery({

    queryKey: ["author", author],
    queryFn: async () => {
      const res = await fetch(`https://openlibrary.org/search.json?` + new URLSearchParams({
        author: author || "",
        limit: "10",
        fields: fields.join(",")
      }).toString());
      if (res.ok) {
        return await res.json()
      }
      throw new Error("Error fetching books. Please try again later")
    },
    enabled: !!author
  });
}

export const searchBySimilarity = ({ ddc_sort }: { ddc_sort?: string }) => {
  return useQuery({

    queryKey: ["similar", ddc_sort],
    queryFn: async () => {
      const res = await fetch(`https://openlibrary.org/search.json?` + new URLSearchParams({
        q: `ddc: ${ddc_sort?.split(".")[0] + "*"}`,
        limit: "10",
        fields: fields.join(",")
      }).toString());
      if (res.ok) {
        return await res.json()
      }
      throw new Error("Error fetching books. Please try again later")
    },
    enabled: !!ddc_sort
  });
}
