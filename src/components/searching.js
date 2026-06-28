import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison({
        skipEmptyTargetValues: true,
        ...rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    });

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        const searchQuery = state[searchField] || ''; // Защита от undefined
        return data.filter(row => compare(row, { [searchField]: searchQuery }));
    }
}