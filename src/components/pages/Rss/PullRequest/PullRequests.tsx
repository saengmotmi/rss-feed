import { useEffect } from "react";
import { Octokit } from "@octokit/core";
import { Container } from "./PullRequests.style";

interface Props {}

const PullRequests = ({}: Props) => {
  useEffect(() => {
    (async () => {
      try {
        const octokit = new Octokit({
          auth: localStorage.getItem("token"),
        });

        const { data: user } = await octokit.request("GET /user", {});
        // const { data: orgs } = await octokit.request("GET /user/orgs");
        // const reposFromOrg = await Promise.all(
        //   orgs.map((org) => fetch(org.repos_url).then((res) => res.json()))
        // );
        // console.log(reposFromOrg);
        const { data: repos } = await octokit.request(
          "GET /users/{username}/repos",
          {
            username: user.login,
            per_page: 100,
          }
        );

        const pulls = await Promise.all(
          repos.map((repo) =>
            octokit.request("GET /repos/{owner}/{repo}/pulls", {
              owner: repo.owner.login,
              repo: repo.name,
              state: "open",
            })
          )
        );

        console.log(pulls.flatMap((pull) => pull.data[0]).filter(Boolean));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <PullRequest />
    </Container>
  );
};

export default PullRequests;

const PullRequest = () => {
  return <></>;
};
