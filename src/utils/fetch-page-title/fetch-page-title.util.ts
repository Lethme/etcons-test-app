import {isValidUrl} from "@/utils";
import axios from "axios";

export const fetchPageTitle = async (url: string): Promise<string | undefined> => {
    if (isValidUrl(url)) {
        try {
            const { data } = await axios.get<Document>(url, {
                responseType: 'document',
            });

            return data.title;
        } catch (exception) {
            console.error(exception);

            return undefined;
        }
    }

    return undefined;
}