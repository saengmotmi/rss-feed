import type { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";
import type { SearchSuggestions } from "types/rss/searchApi";
import convert from "xml-js";

const client = Axios.create({
  baseURL: "https://www.google.com",
});

const getSearchSuggestions = async (
  req: NextApiRequest,
  res: NextApiResponse<SearchSuggestions>
) => {
  const { data } = await client.get<string>(
    `/complete/search?q=${req.query.q}&output=toolbar`
  );

  const xmlToJson: SearchSuggestions = JSON.parse(
    convert.xml2json(data, {
      compact: true,
      spaces: 2,
    })
  );

  return res.status(200).json(xmlToJson);
};

export default getSearchSuggestions;
