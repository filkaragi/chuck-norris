export interface Joke {
    id: string;
    value: string;
    icon_url: string;
    url: string;
    categories: Array<string>
    created_at: string,
    updated_at: string
    favoritesTimestamp: number
}
export interface Search {
    total: number,
    result : Array<Joke>
}

export interface JokeState {
    jokes: Joke[];
}
