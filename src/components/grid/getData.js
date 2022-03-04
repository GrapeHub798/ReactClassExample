import { pictureSearch } from "../../api/api";

export const search = (searchTerm) => {
    return pictureSearch(searchTerm)
        .then(response => response.json())
        .then(data => {
            return data
        });
    
}