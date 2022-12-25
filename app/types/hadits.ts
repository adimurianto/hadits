export type hadiths = {
    arab: string
    id: string
    number: number
}

export type data = {
    id: string
    name: string
    hadiths: hadiths[]
}

export type Hadits = {
    code: number
    data: data
    error: boolean
    message: string
}