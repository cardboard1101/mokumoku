"use client"
 
import { useQuery } from "@apollo/client";
import { GetAllLaunchesDocument, Launch } from "../../../gql/graphql";

export default function HelloWorldContents() {
  const { data, loading, error } = useQuery(GetAllLaunchesDocument);
  if (loading) return <div>LOADING...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <ul>
        {data?.launches?.map((launch: Launch | null, idx: number) => (
          <li key={String(idx)}>
            mission_name: {launch?.mission_name}(rocket_name: {launch?.rocket?.rocket_name})
          </li>
        ))}
      </ul>
    </div>
  );
}
