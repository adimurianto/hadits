export interface hadiths {
    arab: string
    id: string
    number: number
}

export interface data {
    id: string
    name: string
    hadiths: hadiths[]
}

export interface Hadits {
    code: number
    data: data
    error: boolean
    message: string
}