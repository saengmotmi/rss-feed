import type { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";

const client = Axios.create({
  baseURL: "https://github.com",
});

const getSearchSuggestions = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { data } = await client.post(
    "/login/oauth/access_token?scope=repo",
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: req.body.code,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  console.log("hi", data);

  return res.status(200).send(data);
};

export default getSearchSuggestions;
