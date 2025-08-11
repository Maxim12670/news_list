import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../interface/IPost";

type PostsApiResponse = {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
};

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (page = 0) => `/posts?limit=10&skip=${10 * page}`,
      transformResponse: (res: PostsApiResponse): IPost[] => {
        return res.posts;
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
