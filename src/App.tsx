import { useFetch } from './hooks/useFetch.ts'
import { Select } from './UI/Select'

interface T {
	name: string
}

function App() {
	const { data, totalCount, status, error } = useFetch<T[]>({
		endpoint: 'users',
		page: 1,
		pageSize: 30,
		filters: {
			status: 'active',
		},
		sortBy: 'birth_date',
		sortOrder: 'desc',
	})

	if (status === 'loading') return <>Loading...</>
	if (status === 'error') return <>Error: {error}</>

	return (
		<div>
			<Select options={[]} />
			<div>Users: {totalCount}</div>
			<ul>{data?.map((person) => <li>{person.name}</li>)}</ul>
		</div>
	)
}

export default App
