export type book = {
    aboutWriter: string
    bookName: string
    bookSlug: string
    chapters_count: string
    hadiths_count:string
    id: number
    writerDeath: string
    writerName: string
}

export type perawi = {
    books: book[]
    message: string
    status: number
}