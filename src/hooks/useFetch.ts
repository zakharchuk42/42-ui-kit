import { useEffect, useRef, useState } from 'react'

interface UseFetchParams {
	endpoint: string
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	body?: any
	headers?: Record<string, string>
	page?: number
	pageSize?: number
	filters?: Record<string, any>
	sortBy?: string
	sortOrder?: string
}

interface UseFetchResponse<T> {
	data: T | null
	totalCount: number
	status: 'waiting' | 'error' | 'loading' | 'success'
	error: string | null
}

const URL = 'http://localhost:8080'

export const useFetch = <T>({
	endpoint,
	method = 'GET',
	body,
	headers,
	page,
	pageSize,
	filters,
	sortBy,
	sortOrder,
}: UseFetchParams): UseFetchResponse<T> => {
	const [data, setData] = useState<T | null>(null)
	const [status, setStatus] = useState<UseFetchResponse<T>['status']>('waiting')
	const [error, setError] = useState<string | null>(null)
	const [totalCount, setTotalCount] = useState<number>(0)
	const abortControllerRef = useRef<AbortController | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!endpoint) return

			abortControllerRef.current?.abort()
			const controller = new AbortController()
			abortControllerRef.current = controller

			setStatus('loading')
			setError(null)

			try {
				const params = new URLSearchParams()
				if (page) params.append('page', page.toString())
				if (pageSize) params.append('pageSize', pageSize.toString())
				if (filters) {
					Object.entries(filters).forEach(([key, value]) => {
						params.append(key, value.toString())
					})
				}
				if (sortBy) params.append('sortBy', sortBy.toString())
				if (sortOrder) params.append('sortOrder', sortOrder.toString())

				const requestUrl = `${URL}/${endpoint}?${params.toString()}`

				const response = await fetch(requestUrl, {
					method,
					headers: {
						'Content-Type': 'application/json',
						...headers,
					},
					body: body ?? JSON.stringify(body),
					signal: controller.signal,
				})

				if (!response.ok) {
					throw new Error('Error')
				}

				const result = await response.json()

				if (abortControllerRef.current === controller) {
					setData(result.data)
					setTotalCount(result.totalCount || 0)
					setStatus('success')
				}
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message)
					setStatus('error')
				} else {
					console.log('Aborted')
				}
			}
		}

		fetchData()

		return () => {
			abortControllerRef.current?.abort()
		}
	}, [
		endpoint,
		method,
		body,
		headers,
		page,
		pageSize,
		filters,
		sortBy,
		sortOrder,
		sortOrder,
	])

	return {
		data,
		totalCount,
		status,
		error,
	}
}
