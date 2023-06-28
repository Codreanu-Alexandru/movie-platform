export interface User {
    id: number,
    email: string,
    username: string,
    password: string,
    scores: MovieScore[]
}
export interface MovieScore {
    idMovie: number,
    Score: number
}