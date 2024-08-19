import {IBook} from "../models";
import {shallowRef, ShallowRef} from "vue";
import {AnyObject} from "../../../bootstrap/contracts.ts";

export interface UseBooksReturns {
    list: ShallowRef<IBook[]>
    fetchBooks (): Promise<void>
    fetchBook (id: number): Promise<IBook>
    updateBook (id: number, payload: AnyObject): Promise<void>
}

export const useBooks = (): UseBooksReturns => {
    const list = shallowRef<IBook[]>([])

    async function fetchBooks (): Promise<void> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response?.ok) {
            throw new Error('Something went wrong')
        }

        const data = await response.json()

        list.value = data.map(({userId, title, body, id}) => {
            return {
                author: userId,
                description: body,
                id,
                title
            }
        })
    }

    async function fetchBook (id: number): Promise<IBook> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if (!response?.ok) {
            throw new Error('Something went wrong')
        }

        const data = await response.json()

        return data as IBook
    }

    async function updateBook (id: number, payload: AnyObject): Promise<void> {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            { method: 'PUT', body: JSON.stringify(payload) }
        )

        if (!response?.ok) {
            throw new Error('Something went wrong')
        }
    }

    return {
        list,
        fetchBooks,
        fetchBook,
        updateBook
    }
}
