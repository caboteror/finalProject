import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataMockService implements InMemoryDbService {
	createDb() {
		const users = [
			{ id: 1, user: 'a', password: 'a', roll: 0, name: 'Carlos', projectId: 1 },
			{ id: 2, user: 'b', password: 'b', roll: 1, name: 'Toño', projectId: 1 },
			{ id: 3, user: 'c', password: 'c', roll: 1, name: 'Pepa pig', projectId: 2 },
			{ id: 4, user: 'd', password: 'd', roll: 1, name: 'Chucho', projectId: 3 }
		];
		const projects = [
			{ id: 1, name: 'Noel' },
			{ id: 2, name: 'Salvando milagros' },
			{ id: 3, name: 'Jona' },
			{ id: 4, name: 'Las toñas' }
		];
		return { users, projects };
	}
}
