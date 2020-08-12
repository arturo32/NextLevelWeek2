import React, { useState, FormEvent } from 'react';


import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


function TeacherList(){

	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');
	
	async function searchTeachers(e: FormEvent){
		e.preventDefault();
		
		try{
			const response = await api.get('classes', {
				params: {
					subject,
					week_day,
					time
				}
			});
			setTeachers(response.data);
		}catch(e){
			console.log(e);
		}
		
		
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader text="Estes são os proffys disponíveis.">
				<form id="search-teachers" onSubmit={searchTeachers}>

					<Select 
						label="Matéria" 
						name="subject"
						value={subject}
						onChange={ e => { setSubject(e.target.value) }}
						options={[
							{value: 'Artes', label: 'Artes'},
							{value: 'Biologia', label: 'Biologia'},
							{value: 'Ciências', label: 'Ciências'},
							{value: 'Educação Física', label: 'Educação Física'},
							{value: 'Física', label: 'Física'},
							{value: 'Geografia', label: 'Geografia'},
							{value: 'História', label: 'História'},
							{value: 'Português', label: 'Português'},
							{value: 'Matemática', label: 'Matemática'},
							{value: 'Química', label: 'Química'},
						]}
					></Select>
					<Select 
						label="Dia da semana" 
						name= "week-day"
						value={week_day}
 						onChange={ e => { setWeekDay(e.target.value) }}
						options={[
							{value: '0', label: 'Domingo'},
							{value: '1', label: 'Segunda-feira'},
						    {value: '2', label: 'Terça-feira'},
							{value: '3', label: 'Quarta-feira'},
							{value: '4', label: 'Quinta-feira'},
							{value: '5', label: 'Sexta-feira'},
							{value: '6', label: 'Sábado'},
						]}
					></Select>
					<Input 
						label="Hora" 
						name="time" 
						type="time" 
						value={time}
 						onChange={ e => { 
 							setTime(e.target.value);
 						}}
					></Input>

					<button type="submit">
						Buscar
					</button>
		
				</form>
			</PageHeader>

			<main>
				{teachers.map( (teacher:Teacher) => {
					return (
						<TeacherItem key={teacher.id} teacher={teacher}></TeacherItem>
					)
				})}
			</main>
		</div>
	)
}

export default TeacherList;