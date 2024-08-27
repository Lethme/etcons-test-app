import {isValidUrl} from "@/utils";
import axios from "axios";
import * as cheerio from "cheerio";

export const fetchPageTitle = async (url: string): Promise<string | undefined> => {
    if (isValidUrl(url)) {
        const { data } = await axios.get(url);
        const dom = cheerio.load(data);

        return dom('title').text();
    }

    return undefined;
}