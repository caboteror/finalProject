import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataMockService implements InMemoryDbService {
	createDb() {
		const employees = [
			{
				id: 1,
				name: 'Carlos',
				company: 'Noel',
				age: 26,
				birthday: 12 / 12 / 1999,
				favorite_color: 'maroon',
				projectId: 1,
				username: 'a',
				password: 'a',
				roll: 0
			},
			{
				id: 2,
				name: 'Toño',
				company: 'Todo1',
				age: 21,
				birthday: 12 / 12 / 1999,
				favorite_color: 'red',
				projectId: 1,
				username: 'b',
				password: 'b',
				roll: 1
			},
			{
				id: 3,
				name: 'Pepa pig',
				company: 'porcicarnes',
				age: 21,
				birthday: 12 / 12 / 1999,
				favorite_color: 'maroon',
				projectId: 2,
				username: 'c',
				password: 'c',
				roll: 1
			},
			{
				id: 4,
				name: 'Chucho',
				company: 'La Iglesia',
				age: 21,
				birthday: 12 / 12 / 1999,
				favorite_color: 'grey',
				projectId: 3,
				username: 'd',
				password: 'd',
				roll: 1
			}
		];
		const projects = [
			{ id: 1, name: 'Noel', teamSize: 5, clientName: 'pepa pig' },
			{ id: 2, name: 'Salvando milagros', teamSize: 5, clientName: 'pepa pig' },
			{ id: 3, name: 'Jona', teamSize: 5, clientName: 'pepa pig' },
			{ id: 4, name: 'Las toñas', teamSize: 5, clientName: 'pepa pig' }
		];
		return { employees, projects };
	}
}
