import {isValidUrl} from "@/utils";
import axios from "axios";

export const fetchPageTitle = async (url: string): Promise<string | undefined> => {
    if (isValidUrl(url)) {
        try {
            const { data } = await axios.get<Document>(url, {
                responseType: 'document',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                }
            });

            return data.title || undefined;
        } catch (exception) {
            console.error(exception);

            return undefined;
        }
    }

    return undefined;
}